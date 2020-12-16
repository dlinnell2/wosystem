import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col, Form } from 'react-bootstrap'

class AddWO extends Component {
    state = {
        description: "",
        submittedBy: "",
        location: "",
        category: ""

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
                    <Row>
                        <Col>
                        <Form.Group>
                            <Form.Label>Please provide the information requested below</Form.Label>
                            <Form.Control
                                placeholder="Enter work needed"
                                name="description"
                                value={this.state.description}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                placeholder="Your Name"
                                name="submittedBy"
                                value={this.state.submittedBy}
                                onChange={this.handleInputChange}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                placeholder="Your Location"
                                name="location"
                                value={this.state.location}
                                onChange={this.handleInputChange}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                placeholder="Work Category"
                                name="category"
                                value={this.state.location}
                                onChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default AddWO;