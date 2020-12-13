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

        let thisOrder = this.props.order;
        delete thisOrder._id;
        console.log(this.props.order)

        return (
            Object.values(thisOrder).map((item, index) => (
                <Col key={index} className="wotable">{item}</Col>
            ))
        )
    }

    render() {

        return (
            <div>
                <Row>
                    <Col>
                        <Button variant="outline-primary" block>Edit</Button>
                    </Col>
                    {this.createWOItems()}
                </Row>
            </div>
        )
    }
}

export default WOItems