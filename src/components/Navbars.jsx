import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export const Navbars = () => {
    return (
        <>
            <Navbar>
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
};
