import React from 'react'
import { LinkButton } from "../General"
import { Row, Col } from "react-bootstrap"

const UserHeaders = props => {
    return(
        <Row>
                <Col lg={'2'}>
                <LinkButton
                to='/users/add'
                variant='success'
                block>Add New</LinkButton>
                </Col>
                <Col>Last Name</Col>
                <Col>First Name</Col>
                <Col>Email</Col>
                <Col>Location</Col>
                <Col>User</Col>
            </Row>
    )
}

export default UserHeaders