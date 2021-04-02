import React, { Component } from 'react';
import API from "../../utils/API";
import { Row, Col, Form, Button, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap'
import { LinkButton } from "../../components/General"
import { UserLocations } from "../../components/AddUser"

class AddUser extends Component {

    constructor(props) {
        super()

    }

    state = {
        firstName: '',
        lastName: '',
        email: '',
        location: {
            name: '',
            locationId: ''
        },
        role: '',
        password: '',
        confirmPassword: '',
        show: false
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    selectLocation = data => {
        this.setState({
            location: data,
            show: false
        })
    }

    selectRole = role => {
        this.setState({
            role: role
        })
    }

    toggleModal = () => {
        let newShow = !this.state.show

        this.setState({
            show: newShow
        })
    }

    addUser = () => {
        let data = { ...this.state }
        delete data.show

        API.add('users', data)
            .then((res) => {
                this.setState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    location: {
                        name: '',
                        locationId: ''
                    },
                    role: '',
                })
            })
    }

    render() {
        return (
            <>
                <Form>
                    <Form.Row>
                        <Form.Label>Please enter the user information below. </Form.Label>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Control
                                placeholder="First Name"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control
                                placeholder="Last Name"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control
                                placeholder="Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Control
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control
                                placeholder="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                value={this.state.Password}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Control
                                placeholder="Location"
                                name="location"
                                value={this.state.location.name}
                                readOnly
                            />
                        </Form.Group>
                        <Col>
                            <Button
                                variant="primary"
                                onClick={this.toggleModal}
                            >Select Location</Button>
                        </Col>
                        <Col>
                            <InputGroup>
                                <Form.Control
                                    placeholder="Role"
                                    name="role"
                                    value={this.state.role}
                                    readOnly
                                />
                                <DropdownButton
                                    as={InputGroup.Append}
                                    variant={'primary'}
                                    title='Select Role'>
                                    <Dropdown.Item onClick={() => this.selectRole('Manager')}>Manager</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.selectRole('Requester')}>Requester</Dropdown.Item>
                                </DropdownButton>
                            </InputGroup>
                        </Col>
                    </Form.Row>
                    <Row>
                    <Col lg={1}><Button variant="success" onClick={this.addUser}>Add</Button></Col>
                    <Col lg={2}><LinkButton variant="primary" to="/users">Return to List</LinkButton></Col>
                    </Row>
                </Form>

                <UserLocations
                    show={this.state.show}
                    toggleModal={this.toggleModal}
                    selectLocation={this.selectLocation} />
            </>
        )
    }
}

export default AddUser