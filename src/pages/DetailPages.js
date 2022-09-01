import React, { Component } from "react";
import { WithRouter } from "../WithRouter";
import Navbars from "../components/Navbars";
import { Card, Container, Row, Col } from "react-bootstrap";

class DetailPages extends Component {
    goBack() {
        this.props.navigate(-1);
    }
    render() {
        const data = this.props.location.state;
        return (
            <div>
                <Navbars />
                <Container className="">
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Card style={{ width: "35.5rem", height: "46rem" }} className="my-5 shadow-lg bg-dark border border-light">
                                <Card.Img className="img-fluid" variant="top" src={data.image} style={{ height: "35rem" }} onClick={(value) => this.goBack(value)} />
                                <Card.Body className="bg-transparent mt-5">
                                    <Card.Text className="text-center text-white">
                                        <i class="bi bi-star"></i> Rating: {this.props.rate}/10
                                    </Card.Text>
                                    <Card.Title className="text-center text-white">{this.props.judul}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <div className="detailFilms mt-5">
                                <h1 className="mt-5">{this.props.judul}</h1>
                                <hr />
                                <h2 className="mt-5">{this.props.popularitas}</h2>
                                <hr />
                                <h3 className="mt-5">{this.props.rilis}</h3>
                                <hr />
                            </div>
                        </Col>
                        <p>{this.props.overview}</p>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default WithRouter(DetailPages);
