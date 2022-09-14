import React, { createContext, useContext, useState } from "react";

export const MovieContext = createContext();

export const useMovieContext = () => {
    const context = useContext(MovieContext);
    const [favo, setFavo] = context.favo;
    const [deleteItem, setDeleteItem] = context.deleteItem;

    const handleFavo = (item) => {
        const newFavo = [...favo, { item }];
        setFavo(newFavo);
        console.log(newFavo);
    };

    const removeFavo = (index) => {
        const delFavo = [...deleteItem];
        delFavo.splice(index, 1);
        setDeleteItem(delFavo);
    };

    return {
        handleFavo,
        favo,
        removeFavo,
        deleteItem,
    };
};

export const MovieProvider = ({ children }) => {
    const [favo, setFavo] = useState([]);
    const [deleteItem, setDeleteItem] = useState([]);
    return (
        <MovieContext.Provider
            value={{
                favo: [favo, setFavo],
                deleteItem: [deleteItem, setDeleteItem],
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};
