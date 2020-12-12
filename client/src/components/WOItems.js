import React from "react"
import { Row, Col } from "react-bootstrap"

class WOItems extends React.Component {

    constructor(props) {
        super()

    }

    state = {
        items:["test1", "test2"]
    }

    createWOItems = () => (
        Object.values(this.props.order).map((item, index) => (
            <Col key={index} className="wotable">{item}</Col>
        ))
    )

    render() {

        return(
            <div>
                <Row>
                {this.createWOItems()}
                </Row>
            </div>
        )
    }
}

export default WOItems