import React from "react";
import { Row, Col } from "react-bootstrap";

class WOHeaders extends React.Component {

    constructor(props) {
        super()

    }

    state = {
        headers: ["Description", "Assigned To", "Location", "Submitted By", "Status", "Category", "Labor Hours"]
    }

    createHeaders = () => {
        return this.state.headers.map((header, index) => (
            <Col key={index} className="wotable">{header}</Col>
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

export default WOHeaders