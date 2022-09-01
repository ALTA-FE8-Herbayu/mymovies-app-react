import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const WithRouter = (Component) => {
    const wrapper = (props) => {
        const navigate = useNavigate();
        const location = useLocation();
        return (
            <div>
                <Component navigate={navigate} location={location} {...props} />
            </div>
        );
    };
    return wrapper;
};
