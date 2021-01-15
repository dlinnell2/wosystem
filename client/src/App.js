import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { WOList, AddWO, WODetail, AddAsset } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'

class App extends Component {

  render() {
    return (
      <Switch>
        <Route path="/addOrder">
          <AddWO />
        </Route>
        <Route path="/detail/:id">
          <WODetail />
        </Route>
        <Route path="/addAsset">
          <AddAsset />
        </Route>
        <Route path="/">
          <WOList />
        </Route>
      </Switch>
    );
  }
}
export default App;
