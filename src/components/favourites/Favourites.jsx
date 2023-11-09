import React, { useEffect, useState } from 'react';
import Header from '../layout/Header';
import BottomNav from '../layout/BottomNav';
import ImagesList from "../image/ImagesList";
import { favouritesApi } from "../../api/favouritesApi";

const Favourites = () => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const userId = 1; // Replace with dynamic user ID from JWT/session???

        favouritesApi.getFavouritesByUserId(userId)
            .then(response => {
                setFavourites(response.data.map(item => ({
                    id: item.id,
                    url: item.file,
                    isFavourite: true // These are all favorites initially
                })));
            })
            .catch(error => {
                console.error('There was an error fetching favorites:', error);
            });
    }, []);

    const handleToggleFavourite = (image) => {
        const userId = 1; // Replace with dynamic user ID from JWT/session???
        if (image.isFavourite) {
            favouritesApi.deleteFavourite(image.id, userId)
                .then(() => {
                    setFavourites(favourites.filter(fav => fav.id !== image.id));
                })
                .catch(error => {
                    console.error('Error removing image from favourites:', error);
                });
        } else {
            favouritesApi.addImageToFavourites(image.id, userId)
                .then(() => {
                })
                .catch(error => {
                    console.error('Error adding image to favourites:', error);
                });
        }
    };

    return (
        <>
            <Header/>
            <ImagesList
                images={favourites}
                onToggleFavourite={handleToggleFavourite}
            />
            <BottomNav/>
        </>
    );
}

export default Favourites;
