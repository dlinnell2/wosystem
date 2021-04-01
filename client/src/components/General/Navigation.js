import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';
import './nav.css'

const Navigation = props => {

    const location = useLocation();

    return (
        (location.pathname !== '/login') ? (
            <Navbar bg="dark" variant="dark" expand="sm" sticky="top" className="navbar">
                <Navbar.Brand>WO System</Navbar.Brand>
                <Nav>
                    <LinkContainer to='/orders' activeClassName='activeNav'>
                        <Nav.Link>Orders</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/assets' activeClassName='activeNav'>
                        <Nav.Link>Assets</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/users' activeClassName='activeNav'>
                        <Nav.Link>Users</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/locations' activeClassName='activeNav'>
                        <Nav.Link>Locations</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
        ) : (<></>)
    )
}

export default Navigation