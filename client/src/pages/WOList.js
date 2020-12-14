import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from 'react-bootstrap'
import { WOHeaders, WOItems } from "../components/index"
import "./WOList.css"

class WOList extends Component {
    state = {
        order: [1, 2, 3, 4, 5, 6],
        wos: []
    };

    componentDidMount() {
        this.pullWOs();
    }

    pullWOs = () => {
        API.pullList()
            .then((res) => {
                this.setState({
                    wos: res.data
                })
            })
    }

    displayOrders = () => {
        return (
            this.state.wos.map((order, index) => (
                <WOItems order={order} key={index} />
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