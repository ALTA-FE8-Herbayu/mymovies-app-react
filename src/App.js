import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homes } from "./pages/Homes";
import { DetailPage } from "./pages/DetailPage";
import Favorites from "./pages/Favorites";
import { MovieProvider } from "./context/MovieProvider";

const App = () => {
    return (
        <MovieProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Homes />} />
                    <Route path="/details/:judul" element={<DetailPage />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </Router>
        </MovieProvider>
    );
};

export default App;
