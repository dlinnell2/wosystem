import React, { Component } from "react";
import { Row, Col, Form, Card } from 'react-bootstrap';
import "./wodetail.css"

class LaborHours extends Component {

    constructor(props) {
        super()

    }

    render() {

        return (
            <Card className="detailCard">
                <Card.Header>Labor Hours</Card.Header>
                <Card.Body>
                    <h4>Labor hours</h4>
                </Card.Body>
            </Card>
        )
    }
}

export default LaborHours