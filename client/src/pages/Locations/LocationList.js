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
        parent: '',
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
        this.checkForId()
    }

    toggleModal = (e) => {
        let newShow = !this.state.show
        let newParent = e.target.id

        this.setState({
            show: newShow,
            parent: newParent
        })
    }

    checkForId = () => {
        if (this.props.match.params.id) {

        } else {
            API.getAll('locations')
                .then((res) => {
                    this.setState({
                        locations: res.data,
                        show:false
                    })
                })
        }
    }

    addLocation = () => {
        let data = {
            name: this.state.locationName,
            parent: this.state.parent ? this.state.parent : ''
        }
        API.add('locations', data)
            .then((res) => {
                console.log(res)
                this.checkForId()
            })
    }

    locationRows = () => {
        if (this.state.locations) {
            return (this.state.locations.map((location) => (
                <LocationItems 
                location={location} 
                toggleModal={this.toggleModal}/>
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