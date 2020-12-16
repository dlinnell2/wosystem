import React from "react"
import { Row, Col, Button } from "react-bootstrap"

class WOItems extends React.Component {

    constructor(props) {
        super()

    }

    state = {
        categoriesToShow: ["id", "description", "assignedTo", "location", "submittedBy", "status", "category", "laborHours"]
    }

    editOrder = (orderID) => {
        console.log(orderID)
    }

    createWOItems = () => {

        Object.filter = (obj) =>
            Object.keys(obj)
                .filter(key => this.state.categoriesToShow.indexOf(key) >= 0)
                .map(key => obj[key]);

        let order = {...this.props.order}
        order.id=order._id.slice(-5);

        let filteredOrder = Object.filter(order);

        return filteredOrder.map((item, index) => (
            <Col key={index} className="wotable">{item}</Col>
        ))
    }

    render() {

        return (
            <Row>
                <Col>
                    <Button variant="outline-primary" block onClick={this.editOrder(this.props.order._id)}>Edit</Button>
                </Col>
                {this.createWOItems()}
            </Row>
        )
    }
}

export default WOItems