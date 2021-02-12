import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { LinkButton } from '../General'

const LocationItems = props => {

    let location = props.location

    const evaluateChildren = () => {
        if (location.children.length) {
            return (
                <>
                    <Col lg={4} />
                    <Col lg={2}>
                        <LinkButton
                            variant="primary"
                            to={`/locations/detail/${location._id}`}
                            block>Add Sublocation</LinkButton>
                    </Col>
                    <Col lg={2}>
                        <LinkButton
                            variant="outline-primary"
                            to={`/locations/edit/${location._id}`}
                            block>View Sublocations</LinkButton>
                    </Col>
                </>
            )
        } else {
            return (
                <>
                    <Col lg={6} />
                    <Col lg={2}>
                        <LinkButton
                            variant="primary"
                            to={`/locations/detail/${location._id}`}
                            block>Add Sublocation</LinkButton>
                    </Col>
                </>
            )
        }
    }

    return (
        <Row className="listItem">
            <Col lg={4}>
                <h5>{location.name}</h5>
            </Col>
            {evaluateChildren()}
        </Row>
    )

}

export default LocationItems