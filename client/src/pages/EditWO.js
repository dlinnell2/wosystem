import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col, Form } from 'react-bootstrap';
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
            order.id=order._id.slice(-5)
            console.log(order)
            this.setState({
                woInfo:order,
                orderID:this.props.match.params.id
            })
        })
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col lg={8}>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder={this.state.woInfo.description} readOnly />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group>
                            <Form.Label>Work Order ID</Form.Label>
                            <Form.Control type="text" placeholder={this.state.woInfo.id} readOnly />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(EditWO);