import React, { Component } from "react";
import { Row, Col, Form, Card, Button, Modal } from 'react-bootstrap';
import "./wodetail.css"

class LaborHours extends Component {

    constructor(props) {
        super()

    }

    state = {
        show:false
    };

    setShow = (value) => {
        this.setState({
            show:value
        })
    }

    handleClose = () => setShow(false);
    handleShow = () => setShow(true);

    sendLaborHours = () => {
        props.addLaborHours().then(() => {
            handleClose()
        })
    }

    createEntryRow = () => {
        props.laborHours.map((entry, index) => (
            <Row key={index}>
                {this.createEntryColumns(entry)}
            </Row>
        ))
    }

    createEntryColumns = entry => {
        let adjusted = entry.shift();
        console.log(adjusted)
        adjusted.map((item, index) = (
            <Col key={index}>{entry[item]}</Col>
        ))
    }

    render() {

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
                        {this.createEntryRow()}
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
                        <Button variant="success" onClick={sendLaborHours}>Add</Button>
                    </Modal.Body>
                </Modal>

            </>
        )
    }

}

export default LaborHours