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

    selectRolw = role => {
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
                                    <Dropdown.Item>Manager</Dropdown.Item>
                                    <Dropdown.Item>Requester</Dropdown.Item>
                                </DropdownButton>
                            </InputGroup>
                        </Col>
                    </Form.Row>
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