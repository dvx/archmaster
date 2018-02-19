import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <Navbar fixedTop={true}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Archmaster</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Play
              </NavItem>
                    <NavItem eventKey={2} href="#">
                        Build a Deck
              </NavItem>
                    <NavItem eventKey={2} href="#">
                        Print a Card
              </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;
