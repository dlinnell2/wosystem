import React, { Component } from "react";
import API from "../../utils/API";
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
        order: {},
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
        assetId: "",
    };

    componentDidMount() {
        let id = this.props.match.params.id;
        API.getOne('orders', id)
            .then((res) => {
                this.formatOrder(res, "")
            })
    }

    formatDate = (info) => {
        return DateTime.fromISO(info).toLocaleString();
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target)
        if (this.state.variant === "success") {
            this.setState(prevState => {
                let order = { ...prevState.order };
                order.name = value;
                console.log(order)
                return {
                    order: order
                };
            })
        } else {
            this.setState(prevState => {
                let order = { ...prevState.order };
                order.name = value;
                console.log(order)
                return {
                    order: order,
                    variant: 'success'
                };
            })
        }
    }

    updateOrder = () => {
        let id = this.props.match.params.id;
        let order = {...this.state.order}

        API.editOne('orders', id, order)
            .then(res => {
                this.formatOrder(res, "Order updated")
            })
    }

    formatOrder = (res, message) => {
        let order = { ...res.data };
        this.setState({
            order: order,
            message: message,
            variant: 'secondary'
        })
    }

    createTextAreas = () => {

        let data = [
            {
                header: "Action Taken",
                name: "actionTaken",
                value: this.state.order.actionTaken,
            }, {
                header: "Notes",
                name: "notes",
                value: this.state.order.notes,
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

        this.setState(prevState => {
            let order = { ...prevState.order };
            order.laborHours = order.laborHours.concat(data);
            return {
                order: order,
            };
        })

        return new Promise((resolve, reject) => {
            resolve();
        })
    }

    addAsset = () => {

        let data = {
            assetId: this.state.assetId
        }

        this.setState(prevState => {
            let order = { ...prevState.order };
            order.assets = order.assets.concat(data);
            return {
                order: order,
            };
        })

        return new Promise((resolve, reject) => {
            resolve();
        })
    }

    adjustLaborTime = (evaluation) => {
        let hours = parseFloat(this.state.laborTime);
        if (evaluation) {
            hours += parseFloat(0.25)
            this.setState({
                laborTime: hours
            })
        } else {
            hours -= parseFloat(0.25)
            this.setState({
                laborTime: hours
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
                            to="/orders/"
                            variant="primary"
                            className="detailButton"
                            size="sm">Return to list</LinkButton>
                    </Col>
                    <Col sm={2}>{this.state.message}</Col>
                </Row>
                <BasicInfo
                    order={this.state.order}
                    formatDate={this.formatDate}
                    handleInputChange={this.handleInputChange}
                />
                <LaborHours
                    handleInputChange={this.handleInputChange}
                    laborName={this.state.laborName}
                    laborDate={this.state.laborDate}
                    laborTime={this.state.laborTime}
                    addLaborHours={this.addLaborHours}
                    order={this.state.order}
                    adjustLaborTime={this.adjustLaborTime}
                />
                {this.createTextAreas()}
            </Container>
        );
    }
}

export default withRouter(WODetail);