import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { LinkButton } from "../../components/General"

class AddAsset extends Component {
    state = {
        name: "",
        type: "",
        subcategory: "",
        location: "",
        components: []

    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    addNew = (e) => {

        this.setState({
            status: "Submitting asset"
        })
        let data = {
            name: this.state.name,
            type: this.state.type,
            subcategory: this.state.subcategory,
            location: this.state.location,
        }

        console.log(data)

        API.add(data)
            .then(dbRes => {
                console.log(dbRes)
                setTimeout(() => {
                    this.setState({
                        name: "",
                        type: "",
                        subcategory: "",
                        location: "",
                        status: "Asset submitted"
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
                        <Col sm={2}>
                            <Button variant="success" onClick={this.addNew}>Submit your order</Button>
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