import React, {Component} from "react"
import { Row, Col, Form, Button, Card } from 'react-bootstrap'
import { LinkButton } from '../../components/General'
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
                console.log(user)
            )))
        }
    }

    render(){
        return(
            <>
            <Row>
                <Col lg={'2'}>
                <LinkButton
                to='/users/add'
                variant='success'
                block>Add New</LinkButton>
                </Col>
            </Row>
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