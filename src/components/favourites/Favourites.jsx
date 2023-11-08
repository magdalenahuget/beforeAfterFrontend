import React from 'react';
import Header from '../layout/Header';
import BottomNav from '../layout/BottomNav';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FavouritesList from "./FavouritesList";

const Favourites = () => {
    return (
        <>
            <Header/>
            <FavouritesList/>
            <BottomNav/>
        </>
    );
}

export default Favourites;
