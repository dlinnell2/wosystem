import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import { Modal, Form, Button, Container, Row, Col } from 'react-bootstrap';


const UserLocations = (props) => {

    const [locations, updateLocations] = useState([])

    useEffect(() => { getLocations() }, [])

    const getLocations = () => {
        API.getAll('locations')
            .then((res) => {
                console.log(res.data)
                updateLocations(res.data)
            })
    }

    const withSublocation = (location, index) => (
        <Row key={index}>
            <Col lg={'4'}>
                <h5>{location.name}</h5>
            </Col>
            <Col lg={'2'} />
            <Col lg={'3'}>
                <Button
                    variant="outline-success"
                    block>Select Location</Button>
            </Col>
            <Col lg={'3'}>
                <Button
                    variant="success"
                    block>View Sublocation</Button>
            </Col>
        </Row>
    )

    const withoutSublocation = location => {

    }

    const createRows = () => {
        return (
            locations.map((location, index) => {
                if (location.children.length) {
                    return withSublocation(location, index)
                }
            })
        )
    }

    return (
        <Modal size="lg" show={props.show} onHide={props.toggleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Select User Location</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    {createRows()}
                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default UserLocations