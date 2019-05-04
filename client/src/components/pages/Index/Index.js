import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Index extends Component {

    render() {
        return(
            <Row className="main">
                <Col lg={12} sm={12}>
                    Hello world
                </Col >
            </Row>
        );
    }
}

export default Index;
