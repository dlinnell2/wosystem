import React from "react";
import { Row, Col, Form, Card } from 'react-bootstrap';
import "./wodetail.css"

const TextArea = props => (
    <Card className="detailCard">
        <Card.Header>{props.header}</Card.Header>
        <Card.Body>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            name={props.name}
                            value={props.value}
                            onChange={props.handleInputChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
        </Card.Body>
    </Card>
)

export default TextArea