import React , { Component } from "react";

import { Navbar , Container , Nav ,NavDropdown} from "react-bootstrap"
    import { Form } from "react-bootstrap";



export class MyNav extends Component{
    render() {
        return(
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">E-Commerce </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href="/Shopping">Shopping</Nav.Link>
                        <Nav.Link href="/Contact">Contact Us</Nav.Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        );
    }
}