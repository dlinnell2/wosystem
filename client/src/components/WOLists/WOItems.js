import React from "react"
import { Row, Col, Button } from "react-bootstrap"

class WOItems extends React.Component {

    constructor(props) {
        super()

    }

    state = {
        categoriesToShow: ["_id", "description", "assignedTo", "location", "submittedBy", "status", "category", "laborHours"]
    }

    createWOItems = () => {

        Object.filter = (obj) =>
            Object.keys(obj)
                .filter(key => this.state.categoriesToShow.indexOf(key) >= 0)
                .map(key => obj[key]);

        let order = {...this.props.order}
        order._id=order._id.slice(-5);

        let filteredOrder = Object.filter(order);

        return filteredOrder.map((item, index) => (
            <Col key={index} className="wotable">{item}</Col>
        ))
    }

    render() {

        return (
            <Row>
                <Col>
                    <Button variant="outline-primary" block>Edit</Button>
                </Col>
                {this.createWOItems()}
            </Row>
        )
    }
}

export default WOItems