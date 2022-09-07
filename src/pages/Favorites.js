import React from "react";
import { Container, Card, Button, Row } from "react-bootstrap";
import { Navbars } from "../components/Navbars";
// import { useNavigate } from "react-router-dom";
import { useMovieContext } from "../context/MovieProvider";

const Favorites = ({ mode }) => {
    const { favo, removeFavo } = useMovieContext();
    console.log(favo, "ada favo di halaman favorite");
    return (
        <div>
            <Navbars />
            <Container style={{ backgroundColor: mode === "light" ? "black" : "white" }}>
                <Row>
                    {favo.map((item, i) => {
                        return (
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 justify-content-center d-flex" key={i}>
                                <Card
                                    style={{ width: "17.5rem", height: "36rem", color: mode === "light" ? "black" : "white" }}
                                    className="my-5 bg-dark shadow-lg border border-light"
                                >
                                    <Card.Img className="img-fluid" variant="top" src={item.item.image} style={{ height: "25rem" }} />
                                    <Card.Body>
                                        <Card.Text className="text-center text-white">
                                            <i class="bi bi-star"></i> Rating: {item.rate}/10
                                        </Card.Text>
                                        <Card.Title className="text-center text-white">{item.item.judul}</Card.Title>
                                    </Card.Body>
                                    <Button className="p-2" variant="danger" onClick={removeFavo()}>
                                        Remove
                                    </Button>
                                </Card>
                            </div>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default Favorites;
