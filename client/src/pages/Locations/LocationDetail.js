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

    locationRows = () => {
        if(this.state.subLocations.length){
            return(
                <h1>Wrong</h1>
            )
        } else {
            return (
                <h1>Right</h1>
            )
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
                {this.locationRows()}
            </>

        )
    }
}

export default LocationDetail