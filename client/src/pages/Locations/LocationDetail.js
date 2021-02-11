import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LinkButton } from '../../components/General';
import './locationStyling.css'

class LocationDetail extends Component {

    constructor(props) {
        super()

    }

    state = {
        subLocations: [],
        parent: ''
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        API.getOne('locations', id)
            .then((res) => {
                console.log(res)
                this.setState({
                    subLocations: res.data
                })
            })
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
            </>

        )
    }
}

export default LocationDetail