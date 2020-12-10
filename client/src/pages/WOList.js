import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from 'react-bootstrap'
import WOHeader from "../components/"
import WOItems from "../components"

class WOList extends Component {
  state = {
    order:[2,0,4,6,5,1],
    wos:[]
  };

  componentDidMount(){
      this.pullWOs();
  }

  pullWOs = () => {
    API.checkDb()
    .then((res) => {
        this.setState({wos:res.data})
    })
  }

  displayOrders = () => {

      return(
          this.state.wos.map((order, index) => (
              <Row key={index}>
                  <WOItems items={order} />
              </Row>
          ))
      )
  }

  render() {
    return (
      <Container fluid>
        <WOHeader />
        {this.displayOrders()}
      </Container>
    );
  }
}

export default WOList;