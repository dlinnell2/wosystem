import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

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

    addNewWO = (e) => {
        //e.preventDefault()
        console.log('clicked')
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
                            <Form.Group>
                                <Form.Control
                                    placeholder="Your Name"
                                    name="submittedBy"
                                    value={this.state.submittedBy}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Control
                                    placeholder="Your Location"
                                    name="location"
                                    value={this.state.location}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Control
                                    placeholder="Work Category"
                                    name="category"
                                    value={this.state.category}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="success" onClick={this.addNewWO}>Submit your order</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default AddWO;