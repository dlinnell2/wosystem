import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LinkButton } from '../../components/General';
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
        API.getAll('locations')
            .then((res) => {
                this.setState({
                    locations: res.data
                })
            })
    }

    locationRows = () => {
        if (this.state.locations) {
            return (this.state.locations.map((location) => (
                <Row className="listItem">
                    <Col lg={4}>
                        <h5>{location.name}</h5>
                    </Col>
                    <Col lg={4} />
                    <Col lg={2}>
                        <LinkButton
                            variant="primary"
                            to={`/locations/${location._id}`}
                            block>View Sublocations</LinkButton>
                    </Col>
                    <Col lg={2}>
                        <LinkButton
                            variant="outline-primary"
                            to={`/locations/edit/${location._id}`}
                            block>Edit Location</LinkButton>
                    </Col>
                </Row>
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