import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { LinkButton } from "../General"
import AddWO from "../../pages/AddWO"

class WOHeaders extends React.Component {

    constructor(props) {
        super()

    }

    state = {
        headers: ["ID", "Description", "Assigned To", "Location", "Submitted By", "Status", "Category", "Labor Hours"]
    }

    createHeaders = () => {
        return this.state.headers.map((header, index) => (
            <Col key={index} className="woHeader">{header}</Col>
        ))
    }

    render() {
        return (
            <Row>
                <Col>
                    <LinkButton to="/add" variant="success" block>
                        New
                    </LinkButton>
                </Col>
                {this.createHeaders()}
            </Row>
        )
    }
}

export default WOHeaders