import React from 'react';
import Header from '../layout/Header';
import BottomNav from '../layout/BottomNav';
import ImagesList from "../image/ImagesList";

const Favourites = () => {
    return (
        <>
            <Header/>
            <ImagesList isFavourite={true} />
            <BottomNav/>
        </>
    );
}

export default Favourites;