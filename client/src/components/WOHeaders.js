import React from "react";
import { Row, Col } from "react-bootstrap";

class WOHeader extends React.Component {

    constructor(props) {
        super()

    }

    state = {
        headers: ["Description", "Assigned To", "Location", "Submitted By", "Status", "Category"]
    }

    createHeaders = () => {
        return this.state.headers.map((header, index) => (
            <Col key={index}>{header}</Col>
        ))
    }

    render() {
        return (
            <Row>
                {this.createHeaders()}
            </Row>
        )
    }
}

export default WOHeader