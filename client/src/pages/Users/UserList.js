import React, {Component} from "react"
import API from "../../utils/API"

class UserList extends Component {

    constructor(props) {
        super()

    }

    state = {
        users: []
    }

    componentDidMount() {
        API.getAll('users')
        .then((res) => {
            console.log(res)
        })
    }

    render(){
        return(
            <h1>Hello World</h1>
        )
    }
}

export default UserList