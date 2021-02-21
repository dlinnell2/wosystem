import React, { Component } from 'react';
import API from "../../utils/API";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { LinkButton } from "../../components/General"

class AddUser extends Component {

    constructor(props) {
        super()

    }

    state = {
        firstName: '',
        lastName: '',
        email: '',
        location: '',
        role: '',
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Form>
                <Form.Row>
                    <Form.Label>Please enter the user information below. </Form.Label>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control
                            placeholder="First Name"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control
                            placeholder="Last Name"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                        />
                    </Form.Group>
                </Form.Row>
            </Form>
        )
    }
}

export default AddUser