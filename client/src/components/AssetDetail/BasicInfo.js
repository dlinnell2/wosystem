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
                            value={props.asset.name || ''}
                            name='name'
                            onChange={props.handleInputChange}
                        />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group>
                        <Form.Label>Asset Location</Form.Label>
                        <Form.Control
                            value={props.asset.location || ''}
                            name='location'
                            onChange={props.handleInputChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <Form.Group>
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            value={props.asset.type || ''}
                            name='type'
                            onChange={props.handleInputChange}
                        />
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group>
                        <Form.Label>Subcategory</Form.Label>
                        <Form.Control
                            value={props.asset.subcategory || ''}
                            name='subcategory'
                            onChange={props.handleInputChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
        </Card.Body>
    </Card>
)

export default BasicInfo;