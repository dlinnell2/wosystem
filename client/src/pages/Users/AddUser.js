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
        passwordMatch: true,
        showLocations: false,
        showPassword: false,
        passwordType: 'password'
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'password' || 'confirmPassword') {
            (name === 'confirmPassword' && this.state.password === value) ? (
                this.setState({
                    [name]: value,
                    passwordMatch: true
                })
            ) : (
                    this.setState({
                        [name]: value,
                        passwordMatch: false
                    })
                )
        } else {
            this.setState({
                [name]: value
            });
        }
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
        let newShow = !this.state.showLocations

        this.setState({
            showLocations: newShow
        })
    }

    addUser = () => {

        let data = {  
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            location: this.state.location,
            role: this.state.role,
            password: this.state.password
        }

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
                    password: '',
                    confirmPassword: ''
                })
            })
    }

    handleShowPasswordChange = () => {
        let newShow = !this.state.showPassword

        newShow ? this.setState({
            showPassword: newShow,
            passwordType: 'text'
        }) : this.setState({
            showPassword: newShow,
            passwordType: 'password'
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
                                type={this.state.passwordType}
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control
                                placeholder="Confirm Password"
                                type={this.state.passwordType}
                                name="confirmPassword"
                                value={this.state.confirmPassword}
                                onChange={this.handleInputChange}
                            />
                            {this.state.passwordMatch ? ('') : (
                                <Form.Text>Passwords do not match!</Form.Text>
                            )}
                        </Form.Group>
                        <Col lg={2}>
                            <Form.Check
                                type='checkbox'
                                label='Show Password'
                                checked={this.state.showPassword} 
                                onChange={this.handleShowPasswordChange}/>
                        </Col>
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
                        <Col lg={2}>
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
                                    <Dropdown.Item onClick={() => this.selectRole('Technician')}>Technician</Dropdown.Item>
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
                    show={this.state.showLocations}
                    toggleModal={this.toggleModal}
                    selectLocation={this.selectLocation} />
            </>
        )
    }
}

export default AddUser