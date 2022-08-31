import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default class Navbars extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" expand="lg" className="h-5 shadow justify-between" sticky="top">
                    <Container>
                        <Navbar.Brand href="#home" className="fs-4 text-white">
                            <i className="bi bi-film"></i> Movie
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav bg-light" style={{ backgroundColor: "white" }} />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#link" className="text-white fs-4">
                                    Favorite
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}
