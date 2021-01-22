import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = props => (
    <Navbar bg="dark" variant="dark" expand="sm" sticky="top" className="navbar">
        <Navbar.Brand>WO System</Navbar.Brand>
        <Nav>
            <Nav.Link href="/orders">Orders</Nav.Link>
            <Nav.Link href="/assets">Assets</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/locations">Locations</Nav.Link>
        </Nav>
    </Navbar>
)

export default Navigation