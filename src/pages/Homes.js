import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Navbars } from "../components/Navbars";
import { ListMovies } from "../components/ListMovies";
import axios from "axios";
import "animate.css";

const baseUrl = "https://api.themoviedb.org/3/";
const urlHeadline = `${baseUrl}discover/movie?api_key=${process.env.REACT_APP_API_KEY}`;
const baseImage = "https://image.tmdb.org/t/p/original/";

export const Homes = () => {
    const [movies, setMovies] = useState([]);

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
        navigate(`/details/${item.title}`, {
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
    const [mode, setmode] = useState("light"); //State about dark-mode
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };

    const toggleMode = () => {
        if (mode === "light") {
            setmode("dark");
            document.body.style.backgroundColor = "#323638"; //'#042743'
            showAlert("Dark Mode has been Enabled", "success");
        } else {
            setmode("light");
            document.body.style.backgroundColor = "white";
            showAlert("Light Mode has been Enabled", "success");
        }
    };

    return (
        <div>
            <Navbars title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
            <h1 className="text-center" style={{ marginTop: "60px", color: mode === "light" ? "black" : "white" }}>
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
                                    mode={mode}
                                />
                            </div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
};
