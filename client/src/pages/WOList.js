import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from 'react-bootstrap'
import { WOHeaders, WOItems } from "../components/index"

class WOList extends Component {
    state = {
        order: [2, 0, 4, 6, 5, 1],
        wos: []
    };

    componentDidMount() {
        this.pullWOs();
    }

    pullWOs = () => {
        API.checkDb()
            .then((res) => {
                this.setState({
                    wos: res.data
                })
            })
    }

    displayOrders = () => {
        return (
            this.state.wos.map((order, index) => (
                <Row>
                    <WOItems order={order} />
                </Row>
            ))
        )
    }

    render() {
        return (
            <Container fluid>
                <WOHeaders />
                {this.displayOrders()}
            </Container>
        );
    }
}

export default WOList;