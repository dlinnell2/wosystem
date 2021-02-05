import React from 'react'
import { Row, Col, Form, Card, Button } from 'react-bootstrap';
import { LinkButton } from '../General'

const AssociatedOrders = props => {

    const createRows = () => {
        props.orderData.map((order, index) => (

            <Row>
                <Col>
                    <LinkButton
                        to={"/orders/detail/" + order._id}
                        variant="outline-primary"
                        block
                        className="detailButton">Detail
                    </LinkButton>
                </Col>
                <Col>{order.id}</Col>
                <Col>{order.description}</Col>
                <Col>{order.status}</Col>
            </Row>

        ))
    }

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
                {props.orderData.map((order, index) => (

                    <Row>
                        <Col className="buttonColumn">
                            <LinkButton
                                to={"/orders/detail/" + order._id}
                                variant="outline-primary"
                                size="sm"
                                className="detailButton">Detail
                            </LinkButton>
                        </Col>
                        <Col>{order.id}</Col>
                        <Col>{order.description}</Col>
                        <Col>{order.status}</Col>
                    </Row>

                ))}
            </Card.Body>
        </Card>
    )
}

export default AssociatedOrders

