import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { LinkButton } from "../../components/General"
import "./assetStyling.css"

class AssetDetail extends Component {

    constructor(props) {
        super()
    }

    state ={
        variant: 'secondary',
        message: ''
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        API.getOne('assets', id)
            .then((res) => {
                console.log(res)
            })
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col sm={4}>
                        <Button
                            variant={this.state.variant}
                            className="detailButton"
                            size="sm">Save Updates</Button>

                        <LinkButton
                            to="/assets/"
                            variant="primary"
                            className="detailButton"
                            size="sm">Return to list</LinkButton>
                    </Col>
                    <Col sm={2}>{this.state.message}</Col>
                </Row>
            </Container>
        )
    }
}

export default AssetDetail