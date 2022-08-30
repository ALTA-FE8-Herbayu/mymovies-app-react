import "./App.css";
import ListMovie from "./components/ListMovie";
import Navbars from "./components/Navbars";
import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class App extends Component {
    render() {
        const listMovies = [
            {
                image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40",
                title: "DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS",
            },
            {
                image: "https://lumiere-a.akamaihd.net/v1/images/aladdin-movie-poster_63150511.jpeg",
                title: "ALADDIN",
            },
            {
                image: "https://lh5.googleusercontent.com/qnWkvc6QJWgo0rsehHpSox06AWBfWePmODUPSjCf2MTlOi36D4kgTS2iwlBQzwrbfW0G9R1qHHCgHhsyYHclryZzmzv3N3y17Mv21WrWFL7lzQ96P3clNB-WvDDD8_jlE2VTbl53M9PK5x368Q",
                title: "LOVE and THUNDER",
            },
            {
                image: "https://m.media-amazon.com/images/M/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_FMjpg_UX1000_.jpg",
                title: "UNCHARTED",
            },
            {
                image: "https://m.media-amazon.com/images/M/MV5BOTVhMzYxNjgtYzYwOC00MGIwLWJmZGEtMjgwMzgxMWUwNmRhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
                title: "DORA",
            },
            {
                image: "https://upload.wikimedia.org/wikipedia/id/3/34/The_SpongeBob_Movie_-_Sponge_on_the_Run.png",
                title: "SPONGEBOB",
            },
            {
                image: "https://m.media-amazon.com/images/M/MV5BYmU1Y2U0M2EtYjM1YS00MWVjLTg2NzAtMzMwZDdkNjI4ZTY4XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg",
                title: "NOBODY",
            },
            {
                image: "https://m.media-amazon.com/images/M/MV5BYTEzMzM5MTQtOWRjZC00ZWNlLWEwYjQtZTJlZTEwNGE1ZGNjXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
                title: "THE DOORMAN",
            },
            {
                image: "https://flxt.tmsimg.com/assets/p8915813_p_v8_am.jpg",
                title: "THE DICTATOR",
            },
            {
                image: "https://moviesandmania.com/wp-content/uploads/2022/02/after-the-pandemic-movie-film-2022-review-reviews-poster.jpg",
                title: "AFTER THE PANDEMIC",
            },
            {
                image: "https://awsimages.detik.net.id/community/media/visual/2021/11/22/film-one-piece-red_11.jpeg?w=700&q=90",
                title: "One Piece RED",
            },
            {
                image: "https://pbs.twimg.com/media/FMNyLKOUYAoLjpj?format=jpg&name=4096x4096",
                title: "FREE GUY",
            },
        ];
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
                                    <ListMovie className="text-center" image={item.image} judul={item.title} />
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </div>
        );
    }
}
