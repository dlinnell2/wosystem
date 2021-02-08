import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from 'react-bootstrap';
import { AssetHeaders, AssetItems } from '../../components/AssetList/index';
import './assetStyling.css'

class AssetList extends Component {

    constructor(props) {
        super()

    }

    state = {
        order: [1, 2, 3, 4, 5, 6],
        assets: []
    };

    componentDidMount() {
        this.pullAssets();
    }

    pullAssets = () => {
        API.getAll("assets")
            .then((res) => {
                this.setState({
                    assets: res.data
                })
            })
    }

    displayOrders = () => {
        return (
            this.state.assets.map((asset, index) => (
                <AssetItems asset={asset} key={index} />
            ))
        )
    }

    render() {
        return (
            <Container fluid>
                <AssetHeaders />
                {this.displayOrders()}
            </Container>
        );
    }
}

export default AssetList;