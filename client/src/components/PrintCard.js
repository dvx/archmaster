import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, Button, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';
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
                    <form>
                    <FormGroup bsSize="large">
                        <FormControl type="text" placeholder="Large text" />
                    </FormGroup>
                    <FormGroup>
                        <FormControl type="text" placeholder="Normal text" />
                    </FormGroup>
                    <FormGroup bsSize="small">
                        <FormControl type="text" placeholder="Small text" />
                    </FormGroup>
                    </form>
                </Col >
            </Row>
        );
    }
}

export default PrintCard;
