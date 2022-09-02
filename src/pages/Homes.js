import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "animate.css";
import { ListMovies } from "../components/ListMovies";
import { Navbars } from "../components/Navbars";

const baseUrl = "https://api.themoviedb.org/3/";
const urlHeadline = `${baseUrl}discover/movie?api_key=${process.env.REACT_APP_API_KEY}`;
const baseImage = "https://image.tmdb.org/t/p/original/";

export const Homes = () => {
    const [movies, setMovies] = useState([]);

    // const location = useLocation();
    const navigate = useNavigate();
    const getMovies = async () => {
        await axios
            .get(urlHeadline)
            .then((response) => {
                console.log(response.data);
                setMovies(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleClick = (item) => {
        console.log(item.title);
        navigate(`/details/${item.description}`, {
            state: {
                image: baseImage + item.poster_path,
                rate: item.vote_average,
                judul: item.title,
                overview: item.overview,
                popularitas: item.popularity,
                rilis: item.release_date,
            },
        });
    };

    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            <Navbars />
            <h1 className="text-center" style={{ marginTop: "60px" }}>
                Now Playing
            </h1>
            <Container>
                <div className="d-flex flex-row row">
                    {movies.map((item, i) => {
                        return (
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 justify-content-center d-flex" key={i}>
                                <ListMovies
                                    className="text-center"
                                    image={baseImage + item.poster_path}
                                    rate={item.vote_average}
                                    judul={item.title}
                                    overview={item.overview}
                                    popularitas={item.popularity}
                                    rilis={item.release_date}
                                    onClick={() => handleClick(item)}
                                />
                            </div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
};
