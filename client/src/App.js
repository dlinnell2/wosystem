import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { AuthProvider } from './components/Context';
import { VerifyUser } from './utils/VerifyUser'
const history = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <AuthProvider>
        <Router history={history}>
          <VerifyUser />
        </Router>
      </AuthProvider>
    );
  }
}
export default App;
