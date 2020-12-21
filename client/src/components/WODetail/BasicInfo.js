import React from "react"
import { Row, Col, Form, Card } from 'react-bootstrap';

const BasicInfo = props => (

    <Card className="detailCard">
        <Card.Header>Work Order Info</Card.Header>
        <Card.Body>
            <Row>
                <Col lg={8}>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder={props.order.description} readOnly />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group>
                        <Form.Label>Work Order ID</Form.Label>
                        <Form.Control type="text" placeholder={props.order.id} readOnly />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Submitted By</Form.Label>
                        <Form.Control type="text" placeholder={props.order.submittedBy} readOnly />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Creation Date</Form.Label>
                        <Form.Control type="text" placeholder={props.formatDate(props.order.createdAt)} readOnly />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Last Updated</Form.Label>
                        <Form.Control type="text" placeholder={props.formatDate(props.order.updatedAt)} readOnly />
                    </Form.Group>
                </Col>
            </Row>
        </Card.Body>
    </Card>
)

export default BasicInfo