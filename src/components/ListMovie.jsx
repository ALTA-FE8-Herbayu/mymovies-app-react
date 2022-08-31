import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

export default class ListMovie extends Component {
    render() {
        return (
            <>
                <div className="animate__animated animate__jackInTheBox" style={{ animationDuration: "3.5s" }}>
                    <Card style={{ width: "17.5rem", height: "36rem" }} className="my-5 shadow-lg bg-dark border border-light">
                        <Card.Img className="img-fluid" variant="top" src={this.props.image} style={{ height: "25rem" }} />
                        <Card.Body>
                            <Card.Text className="text-center text-white">Rating:{this.props.rate}</Card.Text>
                            <Card.Title className="text-center text-white">{this.props.judul}</Card.Title>
                        </Card.Body>
                        <Button className="p-2" variant="success">
                            Add to favorite
                        </Button>
                    </Card>
                </div>
            </>
        );
    }
}
