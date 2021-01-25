import React from "react"
import { Row, Col, Form, Card } from 'react-bootstrap';

const BasicInfo = props => (

    <Card className='detailCard'>
        <Card.Header>Asset Info</Card.Header>
        <Card.Body>
            <Row>
                <Col lg={8}>
                    <Form.Group>
                        <Form.Label>Asset Name</Form.Label>
                        <Form.Control
                            value={props.name}
                            name='name'
                            onChange={props.handleInputChange}
                        />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group>
                        <Form.Label>Asset Location</Form.Label>
                        <Form.Control
                            value={props.location}
                            name='location'
                            onChange={props.handleInputChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
        </Card.Body>
    </Card>
)

export default BasicInfo;