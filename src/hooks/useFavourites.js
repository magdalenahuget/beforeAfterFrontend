import { useState, useEffect } from 'react';
import { favouritesApi } from '../api/favouritesApi';

const useFavourites = (userId) => {
    const [favourites, setFavourites] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        favouritesApi.getFavouritesByUserId(userId)
            .then(response => {
                setFavourites(response.data);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err);
                setIsLoading(false);
            });
    }, [userId]);

    const addFavourite = (imageId) => {
        return favouritesApi.addImageToFavourites(imageId, userId)
            .then(() => {
                return favouritesApi.getFavouritesByUserId(userId);
            })
            .then(response => {
                setFavourites(response.data);
            })
            .catch(err => {
                setError(err);
            });
    };

    const removeFavourite = (imageId) => {
        return favouritesApi.deleteFavourite(imageId, userId)
            .then(() => {
                return favouritesApi.getFavouritesByUserId(userId);
            })
            .then(response => {
                setFavourites(response.data);
            })
            .catch(err => {
                setError(err);
            });
    };

    return { favourites, addFavourite, removeFavourite, isLoading, error };
};

export default useFavourites;