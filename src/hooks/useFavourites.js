import { useEffect, useState } from 'react';
import { favouritesApi  } from '../api/favouritesApi';

const useFavourites = (userId) => {
    const [favourites, setFavourites] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (userId){
            setIsLoading(true);
            favouritesApi.getFavouritesByUserId(userId)
                .then(response => {
                    setFavourites(response.data.map(fav => ({
                        ...fav,
                        isFavourite: true,
                        url: `data:image/jpeg;base64,${fav.file}`
                    })));
                })
                .catch(error => {
                    console.error('Error fetching favourites:', error);
                    setError(error);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [userId]);

    const addFavourite = (imageId) => {
        favouritesApi.addImageToFavourites(imageId, userId)
            .then(() => {
                setFavourites([...favourites, { id: imageId, isFavourite: true }]);
            })
            .catch(error => {
                alert("You can not add your own image to favourites.");
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

    const handleToggleFavourite = (image) => {
        const isFavourite = favourites.some(fav => fav.id === image.id);
        if (isFavourite) {
            console.log(" useFavourite__REMOVE image_id: " + image.id+" user_id: " + userId);
            removeFavourite(image.id);
        } else {
            console.log(" useFavourite__ADD image_id: " + image.id+" user_id: " + userId);
            addFavourite(image.id);
        }
    };

    return { favourites, addFavourite, removeFavourite, handleToggleFavourite, isLoading, error };
};

export default useFavourites;