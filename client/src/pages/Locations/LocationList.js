import React, {Component} from "react";
import API from "../../utils/API";

class LocationList extends Component {

    constructor(props) {
        super()

    }

    state = {
        locations:[]
    }

    componentDidMount() {
        API.getAll('locations')
        .then((res) => {
            this.setState({
                locations:res.data
            })
        })
    }

    locationRows = () => {
        if (this.state.locations) {
            return( this.state.locations.map((location) => (
                <p>{location.name}</p>
            )))
        }
    }

    render () {
        return (
            this.locationRows()
        )
    }
}

export default LocationList