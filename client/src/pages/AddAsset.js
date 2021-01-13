import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { LinkButton } from "../components/General"
import "./woStyling.css"

class AddAsset extends Component {
    state = {
        name: "",
        type: "",
        subcategory: "",
        location: "",
        child: false,
        components: []

    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    addNewWO = (e) => {

        this.setState({
            status: "Submitting order"
        })
        let data = {
            description: this.state.description,
            assignedTo: "Donald",
            location: this.state.location,
            submittedBy: this.state.submittedBy,
            status: "New",
            category: this.state.category
        }

        API.addNewWO(data)
            .then(dbRes => {
                setTimeout(() => {
                    this.setState({
                        description: "",
                        submittedBy: "",
                        location: "",
                        category: "",
                        status: "Order submitted"
                    });
                }, 500);
            })

    }

    render() {
        return (
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Please enter the asset information below. </Form.Label>
                                <Form.Control
                                    placeholder="Enter Asset Name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Control
                                    placeholder="Asset Type"
                                    name="type"
                                    value={this.state.type}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Control
                                    placeholder="Asset Subcategory"
                                    name="subcategory"
                                    value={this.state.subcategory}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Control
                                    placeholder="Asset Location"
                                    name="location"
                                    value={this.state.location}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            <Button variant="success" onClick={this.addNewWO}>Submit your order</Button>
                        </Col>
                        <Col sm={2}>
                            <LinkButton variant="primary" to="/">Return to list</LinkButton>
                        </Col>
                        <Col sm={8}>
                            <h4>{this.state.status}</h4>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default AddAsset;