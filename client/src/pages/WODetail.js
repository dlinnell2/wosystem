import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { withRouter } from "react-router";
import { DateTime } from "luxon";
import { BasicInfo, EditableInfo, TextArea } from "../components/WODetail"

class WODetail extends Component {

    constructor(props) {
        super()

    }

    state = {
        woInfo: {},
        orderID: "",
        location: "",
        assignedTo: "",
        status: "",
        category: "",
        actionTaken: "",
        notes: "",
        message: ""

    };

    componentDidMount() {
        let id = this.props.match.params.id;
        API.getOne(id)
            .then((res) => {
                this.formatOrder(res, "")
            })
    }

    formatDate = (info) => {
        return DateTime.fromISO(info).toLocaleString();
    }

    handleInputChange = (e) => {
        console.log(e.target)
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    updateOrder = () => {
        let id = this.state.orderID;
        let data = {
            location: this.state.location,
            assignedTo: this.state.assignedTo,
            status: this.state.status,
            category: this.state.category,
            actionTaken: this.state.actionTaken,
            notes: this.state.notes
        }

        API.editOne(id, data)
            .then(res => {
                this.formatOrder(res, "Order updated")
            })
    }

    formatOrder = (res, message) => {
        let order = { ...res.data };
        this.setState({
            woInfo: order,
            orderID: this.props.match.params.id,
            location: order.location,
            assignedTo: order.assignedTo,
            status: order.status,
            category: order.category,
            actionTaken: order.actionTaken,
            notes: order.notes,
            message: message
        })
    }

    createTextAreas = () => {

        let data = [
            {
                header: "Action Taken",
                name: "actionTaken",
                value: this.state.actionTaken,
            }, {
                header: "Notes",
                name: "notes",
                value: this.state.notes,
            }
        ]

        return (
            data.map((item, index) => (
                <TextArea
                    key={index}
                    header={item.header}
                    name={item.name}
                    value={item.value}
                    handleInputChange={this.handleInputChange}
                />
            ))
        )
    }

    render() {

        return (
            <Container fluid>
                <BasicInfo
                    order={this.state.woInfo}
                    formatDate={this.formatDate}
                />
                <EditableInfo
                    handleInputChange={this.handleInputChange}
                    location={this.state.location}
                    assignedTo={this.state.assignedTo}
                    status={this.state.status}
                    category={this.state.location}
                />
                <Card className="editCard">
                    <Card.Header>Labor Hours</Card.Header>
                    <Row>
                        <Col sm={4}>
                            <Form.Group>
                                <Form.Label>Labor Hours</Form.Label>
                                <Form.Control
                                    name="laborHoursName"
                                    value={this.state.laborHoursName}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Card>
                {this.createTextAreas()}
            </Container>
        );
    }
}

export default withRouter(WODetail);