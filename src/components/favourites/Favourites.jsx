import React from 'react';
import useFavourites from '../../hooks/useFavourites';
import ImagesList from "../image/ImagesList";
import { Box, CircularProgress, Typography } from '@mui/material';
import Header from '../layout/Header';
import BottomNav from '../layout/BottomNav';

const FavouritesComponent = ({ userId }) => {
    const { favourites, addFavourite, removeFavourite, isLoading, error } = useFavourites(userId);

    const handleToggleFavourite = (imageId, isFavourite) => {
        if (isFavourite) {
            removeFavourite(imageId);
        } else {
            addFavourite(imageId);
        }
    };

    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Typography color="error" textAlign="center">
                Error loading favourites.
            </Typography>
        );
    }

    return (
        <>
            <Header />
            <ImagesList
                images={favourites}
                onToggleFavourite={handleToggleFavourite}
            />
            <BottomNav />
        </>
    );
};

export default FavouritesComponent;