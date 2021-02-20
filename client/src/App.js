import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routing } from './utils'
import { Navigation } from './components/General'
import Container from 'react-bootstrap/Container'

class App extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <Container fluid>
          <Routing />
        </Container>
      </div>
    );
  }
}
export default App;
