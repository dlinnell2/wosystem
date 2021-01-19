import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { WOList, AddWO, WODetail, AddAsset } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Route, Switch, Redirect } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { Routing} from './utils'

class App extends Component {

  render() {

    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="sm" sticky="top" className="navbar">
          <Navbar.Brand>WO System</Navbar.Brand>
          <Nav>
            <Nav.Link href="/orders">Orders</Nav.Link>
            <Nav.Link href="/asset">Assets</Nav.Link>
            <Nav.Link href="/user">Users</Nav.Link>
            <Nav.Link href="/location">Locations</Nav.Link>
          </Nav>
        </Navbar>
        <Routing />
      </div>
    );
  }
}
export default App;
