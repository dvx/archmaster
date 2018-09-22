import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class CardBuilder extends Component {
    render() {
        return(
        <div style={{paddingTop:'5em'}}>
            <h1>
                Print New Card
            </h1>
                <Form.Group>
                    <Form.Label>Card Name</Form.Label>
                    <Form.Control type="text" placeholder="Large text" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Card Type</Form.Label>
                    <Form.Control as="select">
                        <option>Creature</option>
                        <option>Building</option>
                    </Form.Control>
                </Form.Group>
            </div>
        );
    }
}

export default CardBuilder;
