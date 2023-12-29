import React from 'react';
import useFavourites from '../../hooks/useFavourites';
import ImagesList from "../image/ImagesList";
import Header from '../layout/Header';
import BottomNav from '../layout/BottomNav';
import {getUserIdFromToken} from "../../utils/jwtUtils";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";

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
            <div>
                <Header/>
                <div style={{ paddingTop: '2em' }}>
                    {favourites.length > 0 && (
                        <Typography variant="h4" sx={{ textAlign: 'center', paddingTop: '2em',  }}>
                            Your Favourite Images
                        </Typography>
                    )}
                    {favourites.length > 0
                        ? (
                            <ImagesList
                                images={favourites}
                                titleText="Your Favourites"
                                onDeleteImage={handleDeleteImage}
                            />
                        )
                        : (
                            <Typography sx={{ textAlign: 'center', paddingTop: '2em', fontSize: '2em' }}>
                                You haven't liked any photos yet...
                            </Typography>
                        )
                    }
                </div>
                <BottomNav/>
            </div>
        </>
    );
};

export default Favourites;