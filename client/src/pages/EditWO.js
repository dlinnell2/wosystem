import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from 'react-bootstrap';
import { withRouter } from "react-router";
import "./WOList.css"

class EditWO extends Component {

    constructor(props) {
        super()

    }

    state = {
        order: [1, 2, 3, 4, 5, 6],
        wos: [],
        orderID: ""
    };

    componentDidMount() {
        let data = Object.values(this.props.location.state)[0];
        API.getOne(data)
        .then((res) => {
            console.log(res)
        })
    }

    render() {
        return (
            <Container fluid>
                <h2>Welcome to Edit page</h2>
            </Container>
        );
    }
}

export default withRouter(EditWO);