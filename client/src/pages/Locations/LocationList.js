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

    toggleModal = () => {
        let newShow = !this.state.show

        this.setState({
            show:newShow
        })
    }

    checkForId = () => {
        if (this.props.match.params.id) {

        } else {
            API.getAll('locations')
            .then((res) => {
                this.setState({
                    locations: res.data
                })
            })
        }
    }

    locationRows = () => {
        if (this.state.locations) {
            return (this.state.locations.map((location) => (
                <LocationItems location={location} />
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
                    //addLocation={this.addLocation}
                    />
            </>

        )
    }
}

export default LocationList