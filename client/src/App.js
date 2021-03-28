import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routing } from './utils'
import { Navigation } from './components/General'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { AuthProvider } from './components/Context';
const history = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <AuthProvider>
        <Router history={history}>
          <Navigation />
          <Container fluid>
            <Routing />
          </Container>
        </Router>
      </AuthProvider>
    );
  }
}
export default App;
