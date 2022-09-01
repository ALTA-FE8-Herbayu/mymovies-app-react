import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailPages from "./pages/DetailPages";

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/details" element={<DetailPages />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}
