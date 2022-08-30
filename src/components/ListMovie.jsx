import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

export default class ListMovie extends Component {
    render() {
        return (
            <>
                <Card style={{ width: "17.5rem", height: "32.5rem" }} className="my-5 shadow-lg bg-dark">
                    <Card.Img variant="top" src={this.props.image} style={{ height: "25rem" }} />
                    <Card.Body>
                        <Card.Title className="text-center text-white">{this.props.judul}</Card.Title>
                    </Card.Body>
                    <Button variant="success">Add to favorite</Button>
                </Card>
            </>
        );
    }
}
