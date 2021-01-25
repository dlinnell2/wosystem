import React, { Component } from "react";
import API from "../../utils/API";

class AssetDetail extends Component {

    constructor(props) {
        super()
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
            <h2>Detail</h2>
        )
    }
}

export default AssetDetail