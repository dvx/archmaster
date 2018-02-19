import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from './Card'

import './PrintCard.css';

class PrintCard extends Component {
    render() {
        return(
            <Row className="main">
                <Col lg={6} sm={12} className="left">
                    <Card />
                </Col >
                <Col lg={6} sm={12} className="right">
                <p>
                    right pannel
                </p>
                </Col >
            </Row>
        );
    }
}

export default PrintCard;
