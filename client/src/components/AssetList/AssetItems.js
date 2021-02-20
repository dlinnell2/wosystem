import React from "react";
import { Row, Col } from "react-bootstrap";
import { LinkButton } from "../General"

class AssetItems extends React.Component {

    constructor(props) {
        super()

    }

    state = {
        categoriesToShow: ["name", "type", 'subcategory', 'location', 'inService']
    }

    createItems = () => {

        //creating deep copy of asset on props so that it can be changed, summing labor hours
        let asset = { ...this.props.asset }


        //creating an object to reference, iterating through categories array in state, associating the array item as key with the index as value
        let referenceObject = {}
        this.state.categoriesToShow.forEach((item, i) => {
            referenceObject[item] = i
        });

        //defining a filter function for object to use. Creating array of object keys, filtering by identifying if that key exists in the reference array in state, sorting by indexes held in reference object and then pulling appropriate value from asset object to be returned in new array
        Object.filter = (obj) =>
            Object.keys(obj)
                .filter(key => this.state.categoriesToShow.indexOf(key) >= 0)
                .sort((a, b) => referenceObject[a] - referenceObject[b])
                .map(key => obj[key]);

        //running object filer on asset copy, then mapping to return components
        let filteredAsset = Object.filter(asset);

        return filteredAsset.map((item, index) => (
            <Col key={index} className="assetList">{item}</Col>
        ))
    }

    render() {
        return (
            <Row>
                <Col className="buttonColumn">
                    <LinkButton
                        to={"/assets/detail/" + this.props.asset._id}
                        variant="outline-primary"
                        block
                        className="listButton">Detail
                    </LinkButton>
                </Col>
                {this.createItems()}
            </Row>
        )
    }
}

export default AssetItems