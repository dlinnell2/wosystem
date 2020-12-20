import React, { useState } from "react";
import { Row, Col, Form, Card, Button, Modal } from 'react-bootstrap';
import "./wodetail.css"

const LaborHours = props => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <Card className="detailCard">
                <Card.Header>Labor Hours</Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Button
                                variant="outline-secondary"
                                className="button"
                                size="sm"
                                onClick={handleShow}>Add New</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>Name</Col>
                        <Col>Date</Col>
                        <Col>Hours</Col>
                    </Row>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Labor Entry</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Employee Name</Form.Label>
                            <Form.Control
                                name="laborName"
                                value={props.laborName}
                                onChange={props.handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                name="laborDate"
                                value={props.laborDate}
                                onChange={props.handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Hours worked</Form.Label>
                            <Form.Control
                                name="laborTime"
                                value={props.laborTime}
                                onChange={props.handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                    <Button variant="success">Add</Button>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default LaborHours