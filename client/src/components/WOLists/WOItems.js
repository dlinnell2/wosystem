import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LinkButton } from "../General"

class WOItems extends React.Component {

    constructor(props) {
        super()

    }

    state = {
        categoriesToShow: ["id", "description", "assignedTo", "location", "submittedBy", "status", "category", "laborHours"]
    }

    createWOItems = () => {

        //creating deep copy of order on props so that it can be changed, summing labor hours
        let order = { ...this.props.order }

        let totalHours = parseFloat(0);
        order.laborHours.forEach((entry, index) => {
            totalHours += parseFloat(entry.hours)
        })

        order.laborHours = totalHours

        //creating an object to reference, iterating through categories array in state, associating the array item as key with the index as value
        let referenceObject = {}
        this.state.categoriesToShow.forEach((item, i) => {
            referenceObject[item] = i
        });

        //defining a filter function for object to use. Creating array of object keys, filtering by identifying if that key exists in the reference array in state, sorting by indexes held in reference object and then pulling appropriate value from order object to be returned in new array
        Object.filter = (obj) =>
            Object.keys(obj)
                .filter(key => this.state.categoriesToShow.indexOf(key) >= 0)
                .sort((a, b) => referenceObject[a] - referenceObject[b])
                .map(key => obj[key]);

        //running object filer on order copy, then mapping to return components
        let filteredOrder = Object.filter(order);

        return filteredOrder.map((item, index) => (
            <Col key={index} className="woList">{item}</Col>
        ))
    }

    render() {

        return (
            <Row>
                <Col className="buttonColumn"> 
                    <LinkButton 
                    to={"/detail/" + this.props.order._id}
                    variant="outline-primary"
                    block
                    className="detailButton">Detail
                    </LinkButton>
                </Col>
                {this.createWOItems()}
            </Row>
        )
    }
}

export default WOItems