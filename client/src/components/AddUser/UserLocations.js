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

    return (
        <Modal show={props.show} onHide={props.toggleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Select User Location</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    {locations.map((location, index) => (
                        <Row key={index}>
                            <Col>
                                <h3>{location.name}</h3>
                            </Col>
                        </Row>
                    ))}
                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default UserLocations