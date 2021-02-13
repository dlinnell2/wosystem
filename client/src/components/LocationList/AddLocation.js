import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const AddLocation = (props) => {

    return (
        <Modal show={props.show} onHide={props.toggleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Location</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Location Name</Form.Label>
                        <Form.Control
                            name="locationName"
                            value={props.locationName}
                            onChange={props.handleInputChange}
                        />
                    </Form.Group>
                </Form>
                <Button variant="success" onClick={props.addLocation}>Add</Button>
            </Modal.Body>
        </Modal>
    )
}

export default AddLocation