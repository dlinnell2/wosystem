import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import { LinkButton } from '../General'

const AssociatedOrders = props => {

    return (
        <Card className='detailCard'>
            <Card.Header>Associated Orders</Card.Header>
            <Card.Body>
                <Row>
                    <Col lg={2}/>
                    <Col lg={2}>ID</Col>
                    <Col lg={6}>Description</Col>
                    <Col lg={2}>Status</Col>
                </Row>
                {props.orderData.map((order, index) => (

                    <Row key={index}>
                        <Col key={index} className="buttonColumn" lg={2}>
                            <LinkButton
                                to={"/orders/detail/" + order._id}
                                variant="outline-primary"
                                className="detailButton"
                                key={`button${index}`}>Detail
                            </LinkButton>
                        </Col>
                        <Col key={`id${index}`} lg={2}>{order.id}</Col>
                        <Col key={`descrip${index}`} lg={6}>{order.description}</Col>
                        <Col key={`status${index}`} lg={2}>{order.status}</Col>
                    </Row>

                ))}
            </Card.Body>
        </Card>
    )
}

export default AssociatedOrders

