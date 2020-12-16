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

        Object.filter = (obj, predicate) =>
            Object.assign(...Object.keys(obj)
                .filter(key => predicate(obj[key]))
                .map(key => ({ [key]: obj[key] })));

        let order = Object.assign({}, this.props.order);
        order._id = order._id.slice(-5);

        console.log(Object.assign(...Object.keys(order)))

        let filteredOrder = Object.filter(order, item => this.state.categoriesToShow.indexOf(item >= 0))

        console.log(filteredOrder)

        return (
            Object.values(filteredOrder).map((item, index) => (
                <Col key={index} className="wotable">{item}</Col>
            ))
        )
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