import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, Button, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';
import Card from './Card'
import CardBuilder from './CardBuilder'

import './PrintCard.css';

class PrintCard extends Component {

    constructor() {
        super()
        this.card = { }
    }

    render() {
        return(
            <Row className="main">
                <Col lg={6} sm={12} className="left">
                    <Card payload={this.card}/>
                </Col >
                <Col lg={6} sm={12} className="right">
                    <CardBuilder payload={this.card}/>
                </Col >
            </Row>
        );
    }
}

export default PrintCard;
