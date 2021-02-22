import React from "react";
import { Modal, Form, Button } from 'react-bootstrap';

const UserLocations = (props) => {

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