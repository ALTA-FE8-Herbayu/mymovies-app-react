import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { WithRouter } from "../WithRouter";

class ListMovie extends Component {
    nextPage() {
        this.props.navigate("/details");
    }
    render() {
        return (
            <>
                <div className="animate__animated animate__jackInTheBox" style={{ animationDuration: "3.5s" }}>
                    <Card style={{ width: "17.5rem", height: "36rem" }} className="my-5 shadow-lg bg-dark border border-light">
                        <Card.Img className="img-fluid" variant="top" src={this.props.image} style={{ height: "25rem" }} onClick={(value) => this.nextPage(value)} />
                        <Card.Body>
                            <Card.Text className="text-center text-white">
                                <i class="bi bi-star"></i> Rating: {this.props.rate}/10
                            </Card.Text>
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
export default WithRouter(ListMovie);
// {this.props.judul.length > 10 ? this.props.judul.substring(0, 10): this.props.judul }
