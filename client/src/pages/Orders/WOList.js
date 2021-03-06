import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from 'react-bootstrap'
import { WOHeaders, WOItems } from "../../components/WOLists/index"
import { withRouter } from "react-router-dom"
import "./woStyling.css"

class WOList extends Component {

    constructor(props) {
        super()

    }

    state = {
        order: [1, 2, 3, 4, 5, 6],
        wos: []
    };

    componentDidMount() {
        this.pullWOs();
    }

    pullWOs = () => {
        API.getAll("orders")
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

export default withRouter(WOList);