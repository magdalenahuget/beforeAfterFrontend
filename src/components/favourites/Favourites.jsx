import React from 'react';
import Header from '../layout/Header';
import BottomNav from '../layout/BottomNav';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FavouritesList from "./FavouritesList";

const styles = {
    centerText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
};

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
