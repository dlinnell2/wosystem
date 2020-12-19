import React from "react";
import { Row, Col, Form, Card } from 'react-bootstrap';
import "./wodetail.css"

const EditableInfo = props => (
    <Card className="detailCard">
        <Card.Header>Edit the info</Card.Header>
        <Card.Body>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Assigned To</Form.Label>
                        <Form.Control
                            name="assignedTo"
                            value={props.assignedTo}
                            onChange={props.handleInputChange}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            name="location"
                            value={props.location}
                            onChange={props.handleInputChange}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Status</Form.Label>
                        <Form.Control
                            name="status"
                            value={props.status}
                            onChange={props.handleInputChange}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Work Category</Form.Label>
                        <Form.Control
                            name="category"
                            value={props.category}
                            onChange={props.handleInputChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
        </Card.Body>
    </Card>
)

export default EditableInfo