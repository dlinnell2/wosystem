import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import { Container, Row, Col } from 'react-bootstrap';

const AddAssetList = props => {

    const [assets, updateAssets] = useState([])

    useEffect(() => { getAssets() }, [])

    const getAssets = () => {
        API.getAll('assets')
            .then((res) => {
                updateAssets(res.data)
            })
    }

    return (
        <Container>
            <Row>
                <Col>Name</Col>
                <Col>Type</Col>
                <Col>Subcategory</Col>
            </Row>
            {assets.map((asset, index) => (
                <Row id={index}>
                    <Col id={`name${index}`}>{asset.name}</Col>
                    <Col id={`type${index}`}>{asset.type}</Col>
                    <Col id={`sub${index}`}>{asset.subcategory}</Col>
                </Row>
            ))}
        </Container>
    )

}

export default AddAssetList