import "./App.css";
import ListMovie from "./components/ListMovie";
import Navbars from "./components/Navbars";
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";
const urlHeadline = baseUrl + "discover/movie?" + `api_key=${process.env.REACT_APP_API_KEY}`;
const baselMage = "https://image.tmdb.org/t/p/original/";
export default class App extends Component {
    state = {
        listMovies: [],
    };
    componentDidMount() {
        const self = this;
        axios
            .get(urlHeadline)
            .then((response) => {
                console.log(response.data.results);
                self.setState({
                    listMovies: response.data.results,
                });
            })
            .catch((error) => {
                alert(error);
            });
    }
    render() {
        const { listMovies } = this.state;
        return (
            <div>
                <Navbars />
                <h1 className="text-center" style={{ marginTop: "60px" }}>
                    Now Playing
                </h1>
                <Container className="kontainer d-flex" style={{ marginTop: "1rem" }}>
                    <div className="d-flex flex-row row">
                        {listMovies.map((item, i) => {
                            return (
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 justify-content-center d-flex" key={i}>
                                    <ListMovie className="text-center" image={baselMage + item.poster_path} rate={item.vote_average} judul={item.title} />
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </div>
        );
    }
}
