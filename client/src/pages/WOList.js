import React, { Component } from "react";
import API from "../utils/API";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class WOList extends Component {
  state = {
    
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>Column 1</Col>
          <Col>Column 2</Col>
        </Row>
      </Container>
    );
  }
}

export default WOList;