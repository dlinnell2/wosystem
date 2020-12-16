import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col, Form } from 'react-bootstrap'

class AddWO extends Component {
    state = {
        description:""
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                        placeholder="Enter your description" 
                        name="description"
                        value={this.state.description}
                        onChange = {this.handleInputChange}
                        />
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

export default AddWO;