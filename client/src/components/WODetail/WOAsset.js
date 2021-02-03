import React, { useState } from "react";
import { Row, Col, Form, Card, Button, Modal } from 'react-bootstrap';
import AddAssetList from './AddAssetList';

const WOAsset = props => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendAsset = (asset) => {

        let data = {
            assetId: asset._id,
            name: asset.name,
            type: asset.type,
            subcategory: asset.subcategory,
        }

        props.addAsset(data).then(() => {
            handleClose()
        })
    }

    const createEntryRow = () => {
        if (props.order.assets) {
            return (
                props.order.assets.map((entry, index) => (
                    <Row key={index}>
                        {createEntryColumns(entry)}
                    </Row>
                ))
            )
        }
    }

    const createEntryColumns = entry => {
        let keyArray = Object.keys(entry);

        if (Object.keys(entry)[0] === "assetId") {
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
                    {createEntryRow()}
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