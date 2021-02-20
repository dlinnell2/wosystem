import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { LinkButton } from "../../components/General"
import { BasicInfo, AssociatedOrders } from "../../components/AssetDetail"
import "./assetStyling.css"

class AssetDetail extends Component {

    constructor(props) {
        super()
    }

    state = {
        variant: 'secondary',
        asset: {},
        message: '',
        orderData: []
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        API.getOne('assets', id)
            .then((assetRes) => {

                let orderIds = []
                assetRes.data.orders.forEach((order) => {
                    orderIds.push(order.orderId)
                })

                let queryString = '?array=' + orderIds.join('&array=')

                console.log(queryString)

                API.getMany('orders', queryString)
                    .then((orderRes) => {
                        this.setState({
                            asset: assetRes.data,
                            orderData: orderRes.data
                        })
                    })

            })
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        if (this.state.variant === "success") {
            this.setState(prevState => {
                let asset = { ...prevState.asset };
                asset[name] = value;
                return {
                    asset: asset
                };
            })
        } else {
            this.setState(prevState => {
                let asset = { ...prevState.asset };
                asset[name] = value;
                return {
                    asset: asset,
                    variant: 'success',
                    message:''
                };
            })
        }
    }

    updateAsset = () => {
        let id = this.props.match.params.id
        let asset = {...this.state.asset}

        API.editOne('assets', id, asset)
            .then((res) => {
                this.setState({
                    asset:res.data,
                    variant:'secondary',
                    message:"Asset Updated"
                })
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
                            size="sm"
                            onClick={this.updateAsset}>Save Updates</Button>

                        <LinkButton
                            to="/assets/"
                            variant="primary"
                            className="detailButton"
                            size="sm">Return to list</LinkButton>
                    </Col>
                    <Col sm={2}>{this.state.message}</Col>
                </Row>
                <BasicInfo
                    asset={this.state.asset}
                    handleInputChange={this.handleInputChange}
                />
                <AssociatedOrders
                    asset={this.state.asset}
                    orderData={this.state.orderData}
                />
            </Container>
        )
    }
}

export default AssetDetail