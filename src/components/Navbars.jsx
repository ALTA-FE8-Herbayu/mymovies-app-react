import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export const Navbars = ({ mode, toggleMode }) => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar bg="dark" expand="lg" className="h-5 shadow justify-between" sticky="top">
                <Container>
                    <Navbar.Brand href="#home" className="fs-4 text-white" onClick={() => navigate("/")}>
                        <i className="bi bi-film" onClick={() => navigate("/")}></i> Movie
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav bg-light" style={{ backgroundColor: "white" }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/favorites" className="text-white fs-4 text-decoration-none">
                                Favorite
                            </Link>
                            <hr style={{ color: "white" }} />
                            {/* Toggle Btn for dark/light mode */}
                            <div className={` ms-2 form-check form-switch my-auto text-${mode === "light" ? "dark" : "light"}`}>
                                <input className="form-check-input" onClick={toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                    Dark Mode
                                </label>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
