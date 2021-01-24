import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkButton } from "../General"

class AssetHeaders extends React.Component {

    constructor(props) {
        super()

    }

    state = {
        headers: ["Name", "Type", "Subcategory", "Location", "In Service"]
    }

    createHeaders = () => {
        return this.state.headers.map((header, index) => (
            <Col key={index} className="assetHeader">{header}</Col>
        ))
    }

    render() {
        return (
            <Row>
                <Col className="buttonColumn">
                    <LinkButton to="/assets/add" variant="success" block className="listButton">
                        New
                    </LinkButton>
                </Col>
                {this.createHeaders()}
            </Row>
        )
    }
}

export default AssetHeaders