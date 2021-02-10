import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from 'react-bootstrap';
import { LinkButton } from '../../components/General'

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
                <p>{location.name}</p>
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
                            block>Add New</LinkButton>
                    </Col>
                </Row>
                {this.locationRows()}
            </>

        )
    }
}

export default LocationList