import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LinkButton } from '../../components/General';
import { LocationItems } from '../../components/LocationList'
import './locationStyling.css'

class LocationList extends Component {

    constructor(props) {
        super()

    }

    state = {
        locations: [],
        parent: ''
    }

    componentDidMount() {
        this.checkForId()
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
                        <LinkButton
                            variant="success"
                            to="/locations/add"
                            block
                            className="listButton">Add New</LinkButton>
                    </Col>
                </Row>
                <Card>
                    <Card.Body>
                        {this.locationRows()}
                    </Card.Body>
                </Card>
            </>

        )
    }
}

export default LocationList