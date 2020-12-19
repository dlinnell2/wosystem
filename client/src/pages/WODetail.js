import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { withRouter } from "react-router";
import { DateTime } from "luxon";
import "./WOList.css"

class WODetail extends Component {

    constructor(props) {
        super()

    }

    state = {
        woInfo: {},
        orderID: "",
        location: "",
        assignedTo: "",
        status: "",
        category: "",
        message: ""

    };

    componentDidMount() {
        let id = this.props.match.params.id;
        API.getOne(id)
            .then((res) => {
                this.formatOrder(res, "")
            })
    }

    formatDate = (info) => {
        return DateTime.fromISO(info).toLocaleString();
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    updateOrder = () => {
        let id = this.state.orderID;
        let data = {
            location: this.state.location,
            assignedTo: this.state.assignedTo,
            status: this.state.status,
            category: this.state.category
        }

        API.editOne(id, data)
            .then(res => {
                this.formatOrder(res, "Order updated")
            })
    }

    formatOrder = (res, message) => {
        let order = { ...res.data };
        order.id = order._id.slice(-5)
        this.setState({
            woInfo: order,
            orderID: this.props.match.params.id,
            location: order.location,
            assignedTo: order.assignedTo,
            status: order.status,
            category: order.category,
            message: message
        })
    }

    render() {

        let order = { ...this.state.woInfo };

        return (
            <Container fluid>
                <Card className="editCard">
                    <Card.Header>Work Order Info</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col lg={8}>
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" placeholder={order.description} readOnly />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label>Work Order ID</Form.Label>
                                    <Form.Control type="text" placeholder={order.id} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Submitted By</Form.Label>
                                    <Form.Control type="text" placeholder={order.submittedBy} readOnly />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Creation Date</Form.Label>
                                    <Form.Control type="text" placeholder={this.formatDate(order.createdAt)} readOnly />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Last Updated</Form.Label>
                                    <Form.Control type="text" placeholder={this.formatDate(order.updatedAt)} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className="editCard">
                    <Card.Header>Edit the info</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Assigned To</Form.Label>
                                    <Form.Control
                                        name="assignedTo"
                                        value={this.state.assignedTo}
                                        onChange={this.handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control
                                        name="location"
                                        value={this.state.location}
                                        onChange={this.handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control
                                        name="status"
                                        value={this.state.status}
                                        onChange={this.handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Work Category</Form.Label>
                                    <Form.Control
                                        name="category"
                                        value={this.state.category}
                                        onChange={this.handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className="editCard">
                    <Card.Header>Labor Hours</Card.Header>
                    <Row>
                        <Col sm={4}>
                        <Form.Group>
                            <Form.Label>Labor Hours</Form.Label>
                            <Form.Control
                                name="laborHoursName"
                                value={this.state.laborHoursName}
                            />
                        </Form.Group>
                        </Col>
                    </Row>
                </Card>
                <Row>
                    <Col sm={2}>
                        <Button variant="success" onClick={this.updateOrder}>Save Changes</Button>
                    </Col>
                    <Col sm={2} />
                    <Col sm={8}>{this.state.message}</Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(WODetail);