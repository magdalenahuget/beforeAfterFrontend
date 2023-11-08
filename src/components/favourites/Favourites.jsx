import React, { useEffect, useState } from 'react';
import Header from '../layout/Header';
import BottomNav from '../layout/BottomNav';
import ImagesList from "../image/ImagesList";
import { favouritesApi } from "../../api/favouritesApi";

const Favourites = () => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const userId = 1; // user ID dynamicznie pobierane z jwt sesji?

        favouritesApi.getFavouritesByUserId(userId)
            .then(response => {
                setFavourites(response.data.map(item => ({
                    id: item.id,
                    url: item.file,
                    isFavourite: true
                })));
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    const handleToggleFavourite = (image) => {
        const userId = 1; // user ID dynamicznie pobierane z jwt sesji?
        const method = image.isFavourite ? favouritesApi.deleteFavourite : favouritesApi.addImageToFavourites;

        method(image.id, userId)
            .then(() => {
                setFavourites(favourites.map(fav => {
                    if (fav.id === image.id) {
                        return { ...fav, isFavourite: !fav.isFavourite };
                    }
                    return fav;
                }));
            })
            .catch(error => {
                console.error('Error toggling favourite status', error);
            });
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