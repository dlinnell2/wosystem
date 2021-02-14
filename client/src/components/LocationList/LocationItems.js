import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const LocationItems = props => {

    let location = props.location

    const evaluateChildren = () => {
        if (location.children.length) {
            return (
                <>
                    <Col lg={4} />
                    <Col lg={2}>
                    <Button
                            variant="outline-success"
                            onClick={props.toggleModal}
                            block>View Sublocations</Button>
                    </Col>
                    <Col lg={2}>
                    <Button
                            variant="primary"
                            onClick={props.toggleModal}
                            id={location._id}
                            name={location.name}
                            block>Add Sublocation</Button>
                    </Col>
                </>
            )
        } else {
            return (
                <>
                    <Col lg={6} />
                    <Col lg={2}>
                        <Button
                            variant="primary"
                            onClick={props.toggleModal}
                            id={location._id}
                            name={location.name}
                            block>Add Sublocation</Button>
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