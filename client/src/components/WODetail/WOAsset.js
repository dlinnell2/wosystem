import React, { useState } from "react";
import { Row, Col, Form, Card, Button, Modal } from 'react-bootstrap';
import AddAssetList from './AddAssetList';

const WOAsset = props => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendAsset = (asset) => {
        props.addAsset(asset).then(() => {
            handleClose()
        })
    }

    const createEntryRow = () => {
        return (
            props.order.assets.map((entry, index) => (
                <Row key={index}>
                    {createEntryColumns(entry)}
                </Row>
            ))
        )
    }

    const createEntryColumns = entry => {
        let keyArray = Object.keys(entry);

        if (Object.keys(entry)[0] === "_id") {
            keyArray.shift();
        }

        return (
            keyArray.map((item, index) => (
                <Col key={index}>{entry[item]}</Col>
            ))
        )
    }

    return (

        <>
            <Card className="detailCard">
                <Card.Header>Assets</Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Button
                                variant="outline-secondary"
                                className="button"
                                size="sm"
                                onClick={handleShow}>Add New</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>Name</Col>
                        <Col>Type</Col>
                        <Col>Subcategory</Col>
                    </Row>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Asset</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddAssetList
                        sendAsset={sendAsset}
                    />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default WOAsset