import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ListMovies = ({ image, rate, judul, onDetail, mode, onFavorite }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="animate__animated animate__jackInTheBox" style={{ animationDuration: "3.5s" }}>
                <Card style={{ width: "17.5rem", height: "36rem", color: mode === "light" ? "black" : "white" }} className="my-5 bg-dark shadow-lg border border-light">
                    <Card.Img className="img-fluid" variant="top" src={image} style={{ height: "25rem" }} onClick={onDetail} />
                    <Card.Body>
                        <Card.Text className="text-center text-white">
                            <i class="bi bi-star"></i> Rating: {rate}/10
                        </Card.Text>
                        <Card.Title className="text-center text-white">{judul}</Card.Title>
                    </Card.Body>
                    <Button className="p-2" variant="success" onClick={onFavorite}>
                        Add to Favorite
                    </Button>
                </Card>
            </div>
        </>
    );
};
