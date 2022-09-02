import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homes } from "./pages/Homes";
import { DetailPage } from "./pages/DetailPage";

export const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Homes />} />
                    <Route path="/details/:judul" element={<DetailPage />} />
                </Routes>
            </Router>
        </div>
    );
};
