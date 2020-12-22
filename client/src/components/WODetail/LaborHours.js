import React, { useState } from "react";
import { Row, Col, Form, Card, Button, Modal } from 'react-bootstrap';

const LaborHours = props => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendLaborHours = () => {
        props.addLaborHours().then(() => {
            handleClose()
        })
    }

    const createEntryRow = () => {
        return (
            props.laborHours.map((entry, index) => (
                <Row key={index}>
                    {createEntryColumns(entry)}
                </Row>
            ))
        )
    }

    const createEntryColumns = entry => {
        let keyArray = Object.keys(entry);

        if (Object.keys(entry)[0] === "_id") {
            keyArray.shift();
        }

        return (
            keyArray.map((item, index) => (
                <Col key={index}>{entry[item]}</Col>
            ))
        )
    }

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
                    {createEntryRow()}
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
                            <Row>
                                <Col sm={4}>
                                    <Form.Control
                                        name="laborTime"
                                        value={parseFloat(props.laborTime).toFixed(2)}
                                        onChange={props.handleInputChange}
                                    />
                                </Col>
                                <Col sm={1}>
                                    <Button variant="light">+</Button>
                                </Col>
                                <Col sm={1}>
                                    <Button variant="light">-</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                    <Button variant="success" onClick={sendLaborHours}>Add</Button>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default LaborHours