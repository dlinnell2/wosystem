import React, { Component } from "react";
import API from "../../utils/API";
import { Row, Col, Card, Button } from 'react-bootstrap';
import { LinkButton } from '../../components/General';
import { LocationItems, AddLocation } from '../../components/LocationList'
import './locationStyling.css'

class LocationList extends Component {

    constructor(props) {
        super()

    }

    state = {
        locations: [],
        parent: {},
        locationName: '',
        show: false
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidMount() {
        this.pullInfo()
    }

    toggleModal = (e) => {
        let newShow = !this.state.show

        if (e.target.id) {
            let newParent = {
                name: e.target.name,
                parentId: e.target.id
            }

            this.setState({
                show: newShow,
                parent: newParent
            })
        } else {
            this.setState({
                show: newShow
            })
        }

    }

    pullInfo = () => {
        if (this.props.match.params.id) {
            API.getMany('locations', `/${this.props.match.params.id}`)
                .then((res) => {
                    this.setState({
                        locations: res.data,
                        show: false,
                        parent: res.data[0].parent
                    })
                })

        } else {
            API.getAll('locations')
                .then((res) => {
                    this.setState({
                        locations: res.data,
                        show: false
                    })
                })
        }
    }

    addLocation = () => {
        let data = {
            name: this.state.locationName,
            parent: this.state.parent.name ? this.state.parent : ''
        }

        API.add('locations', data)
            .then((addRes) => {
                if (this.state.parent.name) {
                    let editData = {
                        $push: {
                            children: {
                                name: addRes.data.name,
                                childId: addRes.data._id
                            }
                        }
                    }

                    API.editOne('locations', this.state.parent.parentId, editData)
                        .then((editRes) => {
                            this.pullInfo()
                        })

                } else {
                    this.pullInfo()
                }
            })
    }

    locationRows = () => {
        if (this.state.locations) {
            return (this.state.locations.map((location) => (
                <LocationItems
                    location={location}
                    toggleModal={this.toggleModal} />
            )))
        }
    }

    render() {
        return (
            <>
                <Row>
                    <Col lg={2}>
                        <Button
                            variant="success"
                            onClick={this.toggleModal}
                            block
                            className="listButton">Add New</Button>
                    </Col>
                    {this.props.match.params.id &&
                        <Col lg={2}>
                            <h5>{this.state.parent.name}</h5>
                        </Col>
                    }
                </Row>
                <Card>
                    <Card.Body>
                        {this.locationRows()}
                    </Card.Body>
                </Card>

                <AddLocation
                    handleInputChange={this.handleInputChange}
                    show={this.state.show}
                    toggleModal={this.toggleModal}
                    addLocation={this.addLocation}
                />
            </>

        )
    }
}

export default LocationList