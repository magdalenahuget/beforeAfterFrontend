import React from 'react';
import Header from '../layout/Header';
import BottomNav from '../layout/BottomNav';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImagesList from "./ImagesList";

const Favourites = () => {
    return (
        <>
            <Header/>
            <ImagesList/>
            <BottomNav/>
        </>
    );
}

export default Favourites;
