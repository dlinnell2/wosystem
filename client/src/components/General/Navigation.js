import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = props => (
    <Navbar bg="dark" variant="dark" expand="sm" sticky="top" className="navbar">
        <Navbar.Brand>WO System</Navbar.Brand>
        <Nav>
            <Nav.Link href="/orders">Orders</Nav.Link>
            <Nav.Link href="/asset">Assets</Nav.Link>
            <Nav.Link href="/user">Users</Nav.Link>
            <Nav.Link href="/location">Locations</Nav.Link>
        </Nav>
    </Navbar>
)

export default Navigation