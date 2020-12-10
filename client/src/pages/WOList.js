import React, { Component } from "react";
import API from "../utils/API";
import Container from 'react-bootstrap/Container'
import WOHeader from "../components/"

class WOList extends Component {
  state = {
    
  };

  componentDidMount(){
      this.pullWOs();
  }

  pullWOs = () => {
    API.checkDb()
    .then((res) => {
        console.log(res.data)
    })
  }

  render() {
    return (
      <Container fluid>
        <WOHeader />
      </Container>
    );
  }
}

export default WOList;