import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class MapGenerator extends Component {

  render() {
    return(
      <Row className="main">
        <Col lg={12} sm={12} style={{paddingTop:'5em'}}>
            map 
        </Col >
      </Row>
    );
  }
}

export default MapGenerator;
