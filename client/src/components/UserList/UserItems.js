import React from 'react'
import { Row, Col } from 'react-bootstrap'

const UserItems = props => {

    let user = props.user

    return (
        <Row>
            <Col lg={2} />
            <Col>{user.lastName}</Col>
            <Col>{user.firstName}</Col>
            <Col>{user.email}</Col>
            <Col>{user.location.name}</Col>
            <Col>{user.role}</Col>
        </Row>
    )
}

export default UserItems