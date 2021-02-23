import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import { Modal, Form, Button } from 'react-bootstrap';


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
                <h2>locations</h2>
            </Modal.Body>
        </Modal>
    )
}

export default UserLocations