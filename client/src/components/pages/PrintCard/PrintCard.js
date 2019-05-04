import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "./Card";
import CardBuilder from "./CardBuilder";

import "./PrintCard.css";

class PrintCard extends Component {
  constructor() {
    super();
    this.card = {};
  }

  render() {
    return (
      <Row className="main">
        <Col lg={6} sm={12} className="left">
          <Card />
        </Col>
        <Col lg={6} sm={12} className="right">
          <CardBuilder />
        </Col>
      </Row>
    );
  }
}

export default PrintCard;
