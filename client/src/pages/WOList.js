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
        API.checkDb()
            .then((res) => {
                let stateWos = [];
                res.data.forEach((order) => {
                    delete order._id;
                    stateWos.push(order);
                })
                this.setState({
                    wos: stateWos
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