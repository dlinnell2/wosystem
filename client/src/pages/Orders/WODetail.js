import React, { Component } from "react";
import API from "../../utils/WOAPI";
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { withRouter } from "react-router";
import { DateTime } from "luxon";
import { BasicInfo, TextArea, LaborHours } from "../../components/WODetail"
import { LinkButton } from "../../components/General"
import "./woStyling.css"

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
        laborHours: [],
        laborName: "",
        laborDate: "",
        laborTime: "1.00",
        message: "",
        variant: "secondary",
        assets: [],
        assetId: ""
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

    updateOrder = () => {
        let id = this.state.orderID;
        let data = {
            location: this.state.location,
            assignedTo: this.state.assignedTo,
            status: this.state.status,
            category: this.state.category,
            actionTaken: this.state.actionTaken,
            notes: this.state.notes,
            laborHours: this.state.laborHours
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
            laborHours: order.laborHours,
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

    addLaborHours = () => {

        let data = {
            employee: this.state.laborName,
            date: this.state.laborDate,
            hours: this.state.laborTime
        }

        console.log(data)
        this.setState({
            laborHours: this.state.laborHours.concat(data)
        })

        return new Promise((resolve, reject) => {
            resolve();
        })
    }

    addAsset = () => {
        
        let data = {
            assetId: this.state.assetId
        }

        this.setState({
            assets: this.state.assets.concat(data)
        })

        return new Promise ((resolve, reject) => {
            resolve();
        })
    }

    adjustLaborTime = (evaluation) => {
        let hours = parseFloat(this.state.laborTime);
        if (evaluation) {
            hours += parseFloat(0.25)
            this.setState({
                laborTime:hours
            })
        } else {
            hours -= parseFloat(0.25)
            this.setState({
                laborTime:hours
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
                            onClick={this.updateOrder}
                            className="detailButton"
                            size="sm">Save Updates</Button>

                        <LinkButton
                            to="/"
                            variant="primary"
                            className="detailButton"
                            size="sm">Return to list</LinkButton>
                    </Col>
                </Row>
                <BasicInfo
                    order={this.state.woInfo}
                    formatDate={this.formatDate}
                    handleInputChange={this.handleInputChange}
                    location={this.state.location}
                    assignedTo={this.state.assignedTo}
                    status={this.state.status}
                    category={this.state.location}
                />
                <LaborHours
                    handleInputChange={this.handleInputChange}
                    laborName={this.state.laborName}
                    laborDate={this.state.laborDate}
                    laborTime={this.state.laborTime}
                    addLaborHours={this.addLaborHours}
                    laborHours={this.state.laborHours}
                    adjustLaborTime={this.adjustLaborTime}
                />
                {this.createTextAreas()}
            </Container>
        );
    }
}

export default withRouter(WODetail);