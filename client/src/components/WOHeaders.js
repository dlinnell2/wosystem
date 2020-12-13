import React from "react";
import { Row, Col, Button } from "react-bootstrap";

class WOHeaders extends React.Component {

    constructor(props) {
        super()

    }

    state = {
        headers: ["ID", "Description", "Assigned To", "Location", "Submitted By", "Status", "Category", "Labor Hours"]
    }

    createHeaders = () => {
        return this.state.headers.map((header, index) => (
            <Col key={index} className="wotable">{header}</Col>
        ))
    }

    render() {
        return (
            <Row>
                <Col>
                    <Button variant="success" block>New</Button>
                </Col>
                {this.createHeaders()}
            </Row>
        )
    }
}

export default WOHeaders