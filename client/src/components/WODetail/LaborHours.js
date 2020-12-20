import React, { useState } from "react";
import { Row, Col, Form, Card, Button } from 'react-bootstrap';
import "./wodetail.css"

const LaborHours = props => {

    return (

        <>
            <Card className="detailCard">
                <Card.Header>Labor Hours</Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Button variant="outline-secondary" className="button" size="sm">Add New</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>Name</Col>
                        <Col>Date</Col>
                        <Col>Hours</Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default LaborHours