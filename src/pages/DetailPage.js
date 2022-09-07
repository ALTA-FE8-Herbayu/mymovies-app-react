import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbars } from "../components/Navbars";

export const DetailPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div>
            <Navbars />
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Card style={{ width: "35.5rem", height: "46rem" }} className="my-5 shadow-lg bg-dark border border-light">
                            <Card.Img className="img-fluid" variant="top" src={location.state.image} style={{ height: "35rem" }} onClick={() => navigate("/")} />
                            <Card.Body className="bg-transparent mt-5">
                                <Card.Text className="text-center text-white">
                                    <i class="bi bi-star"></i> Rating: {location.state.rate}/10
                                </Card.Text>
                                <Card.Title className="text-center text-white">{location.state.judul}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mt-5">
                        <div className="detailFilms">
                            <h1 className="mt-5">Judul: {location.state.judul}</h1>
                            <hr />
                            <h2 className="mt-5">Popularitas: {location.state.popularitas}</h2>
                            <hr />
                            <h3 className="mt-5">Rilis: {location.state.rilis}</h3>
                            <hr />
                        </div>
                        <p>{location.state.overview}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
