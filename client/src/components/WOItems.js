import React from "react"
import { Row, Col, Button } from "react-bootstrap"

class WOItems extends React.Component {

    constructor(props) {
        super()

    }

    state = {
        items: ["test1", "test2"]
    }

    createWOItems = () => {

        let order = Object.assign({},this.props.order);
        order._id = order._id.slice(-5);
        console.log(this.props.order)

        return (
            Object.values(order).map((item, index) => (
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