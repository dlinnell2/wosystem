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
        woInfo:{},
        orderID: ""
    };

    componentDidMount() {
        let id = this.props.match.params.id;
        API.getOne(id)
        .then((res) => {
            let order = {...res.data};
            this.setState({
                woInfo:order,
                orderID:this.props.match.params.id
            })
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