import React, { useState, useEffect } from "react";
import { Container, Card, Button, Row } from "react-bootstrap";
import { Navbars } from "../components/Navbars";
import { useMovieContext } from "../context/MovieProvider";

const Favorites = ({ mode }) => {
    const baseImage = "https://image.tmdb.org/t/p/original/";
    const { favo, removeFavo } = useMovieContext();
    console.log(favo, "ini di favorites page");

    // const deleteFavo = () => {
    //     setListFavo(favo.shift());
    //     setListFavo(favo.pop());
    // };

    useEffect(() => {
        favo.shift();
    }, []);

    return (
        <div>
            <Navbars />
            <Container style={{ backgroundColor: mode === "light" ? "black" : "white" }}>
                <h1 className="text-white">Favorites Movie</h1>
                <Row>
                    {favo.map((item, i) => {
                        return (
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 justify-content-center d-flex" key={i}>
                                <Card
                                    style={{ width: "17.5rem", height: "36rem", color: mode === "light" ? "black" : "white" }}
                                    className="my-5 bg-dark shadow-lg border border-light"
                                >
                                    <Card.Img className="img-fluid" variant="top" src={baseImage + item.item.poster_path} style={{ height: "25rem" }} />
                                    <Card.Body>
                                        <Card.Text className="text-center text-white">
                                            <i class="bi bi-star"></i> Rating: {item.item.rate}/10
                                        </Card.Text>
                                        <Card.Title className="text-center text-white">{item.item.title}</Card.Title>
                                    </Card.Body>
                                    <Button className="p-2" variant="danger" onClick={() => removeFavo()}>
                                        Remove
                                    </Button>
                                </Card>
                            </div>
                        );
                    })}
                </Row>
                {/* {favo.map((item, i) => {
                    return (
                        <div key={i}>
                            <p>{item.item.title}</p>
                            <img src={baseImage + item.item.poster_path} />;
                        </div>
                    );
                })} */}
            </Container>
        </div>
    );
};

export default Favorites;
