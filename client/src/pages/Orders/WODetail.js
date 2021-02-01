import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { withRouter } from "react-router";
import { DateTime } from "luxon";
import { BasicInfo, TextArea, LaborHours, WOAsset } from "../../components/WODetail"
import { LinkButton } from "../../components/General"
import "./woStyling.css"

class WODetail extends Component {

    constructor(props) {
        super()

    }

    state = {
        order: {},
        laborName: "",
        laborDate: "",
        laborTime: "1.00",
        message: "",
        variant: "secondary",
        updateAsset: false,
        assetIds:[]
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
        if (this.state.variant === "success") {
            this.setState(prevState => {
                let order = { ...prevState.order };
                if (order.hasOwnProperty(name)) {
                    order[name] = value;
                    return {
                        order: order
                    };
                } else {
                    return {
                        [name]: value
                    }
                }
            })
        } else {
            this.setState(prevState => {
                let order = { ...prevState.order };
                if (order.hasOwnProperty(name)) {
                    order[name] = value;
                    return {
                        order: order,
                        variant: "success"
                    };
                } else {
                    return {
                        [name]: value,
                        variant: "success"
                    }
                }
            })
        }
    }

    updateOrder = () => {
        let id = this.props.match.params.id;
        let order = { ...this.state.order }

        if (this.state.updateAsset) {
            console.log(order)
            API.editOne('orders', id, order)
            .then(orderRes => {
                this.state.assetIds.forEach( assetId => {
                    API.editOne('assets', assetId, { $push: { orders: id }})
                    .then(assetRes => {
                        console.log(assetRes);
                        this.formatOrder(orderRes, "Order updated")
                    })
                })
            })

        } else {
            console.log(order)
            API.editOne('orders', id, order)
                .then(res => {
                    this.formatOrder(res, "Order updated")
                })
        }
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

    addAsset = (asset) => {

        let data = {
            assetId: asset._id,
            name: asset.name,
            type: asset.type,
            subcategory: asset.subcategory
        }

        this.setState(prevState => {
            let order = { ...prevState.order };
            order.assets = order.assets.concat(data);
            return {
                order: order,
                updateAsset: true,
                assetIds: this.state.assetIds.concat(asset._id),
                variant: "success"
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
                <WOAsset
                    addAsset={this.addAsset}
                    order={this.state.order}
                />
                {this.createTextAreas()}
            </Container>
        );
    }
}

export default withRouter(WODetail);