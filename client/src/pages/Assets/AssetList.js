import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from 'react-bootstrap'

class WOList extends Component {

    constructor(props) {
        super()

    }

    state = {
        order: [1, 2, 3, 4, 5, 6],
        assets: []
    };

    componentDidMount() {
        this.pullWOs();
    }

    pullAssets = () => {
        API.getAll("assets")
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