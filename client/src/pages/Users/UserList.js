import React, {Component} from "react"
import { Row, Col, Form, Button, Card } from 'react-bootstrap'
import { LinkButton } from '../../components/General'
import { UserHeaders, UserItems } from '../../components/UserList'
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
            this.setState({
                users:res.data
            })
        })
    }

    userRows = () => {
        if (this.state.users){
            return (this.state.users.map((user, index) => (
                <UserItems
                user={user}
                key={index} />
            )))
        }
    }

    render(){
        return(
            <>
            <UserHeaders />
            <Card>
                <Card.Body>
                    {this.userRows()}
                </Card.Body>
            </Card>
            </>
        )
    }
}

export default UserList