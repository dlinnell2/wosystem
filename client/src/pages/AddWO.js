import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from 'react-bootstrap'

class AddWO extends Component {
    state = {
        order: [1, 2, 3, 4, 5, 6],
        wos: []
    };

    render() {
        return (
            <h4>Add WO page</h4>
        );
    }
}

export default AddWO;