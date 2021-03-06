import React from "react";
import { Row, Col } from "react-bootstrap";
import { LinkButton } from "../General"

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
                <Col className="buttonColumn">
                    <LinkButton to="/orders/add" variant="success" block className="listButton">
                        New
                    </LinkButton>
                </Col>
                {this.createHeaders()}
            </Row>
        )
    }
}

export default WOHeaders