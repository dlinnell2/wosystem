import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routing, Navigation } from './utils'

class App extends Component {

  render() {

    return (
      <div>
        <Navigation />
        <Routing />
      </div>
    );
  }
}
export default App;
