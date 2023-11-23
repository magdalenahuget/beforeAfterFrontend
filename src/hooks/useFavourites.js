import {useEffect, useState} from 'react';
import {favouritesApi} from '../api/favouritesApi';
import {useNavigate} from "react-router-dom";

const useFavourites = (loggedUserId) => {
    const [favourites, setFavourites] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedUserId) {
            setIsLoading(true);
            favouritesApi.getFavouritesByUserId(loggedUserId)
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
    }, [loggedUserId]);

    const addFavourite = (imageId) => {
        favouritesApi.addImageToFavourites(imageId, loggedUserId)
            .then(() => {
                setFavourites([...favourites, {id: imageId, isFavourite: true}]);
            })
            .catch(error => {
                if (loggedUserId === null) {
                    navigate(`/signin`)
                    return
                }
                alert("You can not add your own image to favourites.");
            });
    };


    const removeFavourite = (imageId) => {
        favouritesApi.deleteFavourite(imageId, loggedUserId)
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
            console.log(" useFavourite__REMOVE image_id: " + image.id + " user_id: " + loggedUserId);
            removeFavourite(image.id);
        } else {
            console.log(" useFavourite__ADD image_id: " + image.id + " user_id: " + loggedUserId);
            addFavourite(image.id);
        }
    };

    return {favourites, addFavourite, removeFavourite, handleToggleFavourite, isLoading, error};
};

export default useFavourites;