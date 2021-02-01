import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import { Container, Row, Col, Button } from 'react-bootstrap';

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
                <Col />
                <Col className='woList'>Name</Col>
                <Col className='woList'>Type</Col>
                <Col className='woList'>Subcategory</Col>
            </Row>
            {assets.map((asset, index) => (
                <Row id={index}>
                    <Col>
                        <Button variant='success' id={asset._id} onClick={() => props.sendAsset(asset)} block className='listButton'>Add</Button>
                    </Col>
                    <Col id={`name${index}`} className='woList'>{asset.name}</Col>
                    <Col id={`type${index}`} className='woList'>{asset.type}</Col>
                    <Col id={`sub${index}`} className='woList'>{asset.subcategory}</Col>
                </Row>
            ))}
        </Container>
    )

}

export default AddAssetList