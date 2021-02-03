import React from 'react'
import { Row, Col, Form, Card, Button } from 'react-bootstrap';

const AssociatedOrders = props => {


    return (
        <Card className='detailCard'>
            <Card.Header>Associated Orders</Card.Header>
            <Card.Body>
                <Row>
                    <Col />
                    <Col>ID</Col>
                    <Col>Description</Col>
                    <Col>Status</Col>
                </Row>
                <Row>
                    <Col>
                        <Button
                            variant='success'
                            className='buttonColumn'
                            size='sm'
                        >Detail</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default AssociatedOrders

