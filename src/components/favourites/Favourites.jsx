import React from 'react';
import useFavourites from '../../hooks/useFavourites';
import ImagesList from "../image/ImagesList";
import Header from '../layout/Header';
import BottomNav from '../layout/BottomNav';
import {getUserIdFromToken} from "../../utils/jwtUtils";
import {Typography} from "@mui/material";

const Favourites = () => {
    const loggedUserId = getUserIdFromToken();
    const {favourites, removeFavourite, isLoading, error} = useFavourites(loggedUserId);

    // if (isLoading) return <p>Loading...</p>;
    // if (error) return <p>An error occurred: {error.message}</p>;
    //
    const handleDeleteImage = (imageId) => {
        removeFavourite(imageId);
    };

    return (
        <>
            <Header/>
            {favourites.length > 0 ? (
                <ImagesList
                    images={favourites}
                    titleText="Your Favourites"
                    onDeleteImage={handleDeleteImage}
                />
            ) : (
                <Typography sx={{ textAlign: 'center', mt: 10, fontSize: '2em' }}>
                    You haven't liked any photos yet... :(
                </Typography>
            )}
            <BottomNav/>
        </>
    );
};

export default Favourites;