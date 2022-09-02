import React, { Component } from "react";
import { WithRouter } from "../WithRouter";
import Navbars from "../components/Navbars";
import { Card, Container, Row, Col } from "react-bootstrap";

class DetailPages extends Component {
    goBack() {
        this.props.navigate(-1);
    }
    render() {
        console.log(this.props.location.state.image);
        // const data = this.props.location.state;
        return (
            <div>
                <Navbars />
                <Container className="">
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Card style={{ width: "35.5rem", height: "46rem" }} className="my-5 shadow-lg bg-dark border border-light">
                                <Card.Img
                                    className="img-fluid"
                                    variant="top"
                                    src={this.props.location.state.image}
                                    style={{ height: "35rem" }}
                                    onClick={(value) => this.goBack(value)}
                                />
                                <Card.Body className="bg-transparent mt-5">
                                    <Card.Text className="text-center text-white">
                                        <i class="bi bi-star"></i> Rating: {this.props.location.state.rate}/10
                                    </Card.Text>
                                    <Card.Title className="text-center text-white">{this.props.location.state.judul}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mt-5">
                            <div className="detailFilms">
                                <h1 className="mt-5">{this.props.location.state.judul}</h1>
                                <hr />
                                <h2 className="mt-5">{this.props.location.state.popularitas}</h2>
                                <hr />
                                <h3 className="mt-5">{this.props.location.state.rilis}</h3>
                                <hr />
                            </div>
                            <p className="">
                                {this.props.location.state.overview}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                                including versions of Lorem Ipsum
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default WithRouter(DetailPages);
