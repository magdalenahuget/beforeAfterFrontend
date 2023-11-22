import React from 'react';
import useFavourites from '../../hooks/useFavourites';
import ImagesList from "../image/ImagesList";
import Header from '../layout/Header';
import BottomNav from '../layout/BottomNav';
import {getUserIdFromToken} from "../../utils/jwtUtils";

const Favourites = () => {
    const userId = getUserIdFromToken();
    const {favourites, removeFavourite, isLoading, error} = useFavourites(userId);

    // if (isLoading) return <p>Loading...</p>;
    // if (error) return <p>An error occurred: {error.message}</p>;
    //
    const handleDeleteImage = (imageId) => {
        removeFavourite(imageId);
    };

    return (
        <>
            <Header/>
            <ImagesList
                images={favourites}
                titleText="Your Favourites"    //PODMIENIĆ NA TitleTypography.jsx
                onDeleteImage={handleDeleteImage}
            />
            <BottomNav/>
        </>
    );
};

export default Favourites;