import { useEffect, useState } from 'react';
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
            .catch(error => {
                console.error('There was an error fetching the favourites:', error);
                setError(error);
                setIsLoading(false);
            });
    }, [userId]);

    const addFavourite = (imageId) => {
        favouritesApi.addImageToFavourites(imageId, userId)
            .then(() => {
                setFavourites([...favourites, { id: imageId, isFavourite: true }]);
            })
            .catch(error => {
                console.error('Error adding image to favourites:', error);
            });
    };

    const removeFavourite = (imageId) => {
        favouritesApi.deleteFavourite(imageId, userId)
            .then(() => {
                setFavourites(favourites.filter(fav => fav.id !== imageId));
            })
            .catch(error => {
                console.error('Error removing image from favourites:', error);
            });
    };

    return { favourites, addFavourite, removeFavourite, isLoading, error };
};

export default useFavourites;
