import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routing } from './utils'
import { Navigation } from './components/General'

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
