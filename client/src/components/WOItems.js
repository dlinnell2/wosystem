import React from "react"
import Col from "react-bootstrap/Col"

class WOItems extends React.Component {

    constructor(props) {
        super()

    }

    createWOItems = () => (
        Object.values(this.props.order).map((item, index) => (
            <Col key={index} className="wotable">{item}</Col>
        ))
    )

    render() {

        return(
            <div>
                {this.createWOItems()}
            </div>
        )
    }
}

export default WOItems