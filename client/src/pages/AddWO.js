import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col, Form } from 'react-bootstrap'

class AddWO extends Component {
    state = {
        order: [1, 2, 3, 4, 5, 6],
        wos: []
    };

    render() {
        return (
            <Container>
                <Form>
                    <Form.Group controlID="addWorkOrderForm">
                        <Form.Label>Add a new work order</Form.Label>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

export default AddWO;