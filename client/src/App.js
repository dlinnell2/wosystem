import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from './utils/API'

class App extends Component {

  state = {
    express: '',
    database: ''
  };

  componentDidMount() {
    API.checkExpress()
      .then(res => this.setState({
        express: res.data.express
      }))
      .catch(err => console.log(err))
  }

  checkDB = () => {
    API.checkDb()
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          this.setState({
            database: "Connected to DB"
          })
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.express}
          </p>
          <button onClick={this.checkDB}>Click to check DB connection</button>
          <p>{this.state.database}</p>
        </header>
      </div>
    );
  }
}
export default App;
