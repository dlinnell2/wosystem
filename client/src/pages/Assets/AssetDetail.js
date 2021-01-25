import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { LinkButton } from "../../components/General"
import { BasicInfo } from "../../components/AssetDetail"
import "./assetStyling.css"

class AssetDetail extends Component {

    constructor(props) {
        super()
    }

    state = {
        variant: 'secondary',
        message: '',
        name: '',
        location: ''
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        API.getOne('assets', id)
            .then((res) => {
                this.setState({
                    name: res.data.name,
                    location: res.data.location
                })
            })
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        if (this.state.variant === "success") {
            this.setState({
                [name]: value
            });
        } else {
            this.setState({
                [name]: value,
                variant: "success"
            })
        }
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
                <BasicInfo
                    name={this.state.name}
                    location={this.state.location}
                    handleInputChange={this.handleInputChange}
                />
            </Container>
        )
    }
}

export default AssetDetail