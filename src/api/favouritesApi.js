import axios from 'axios';


const API_FAVOURITES = `${process.env.REACT_APP_API_URL}/favourites`;

const getFavouritesByUserId = (userId) => {
    return axios.get(`${API_FAVOURITES}/users/${userId}`);
};

const addImageToFavourites = (imageId, userId) => {
    return axios.post(`${API_FAVOURITES}/images/${imageId}/users/${userId}`);
};

const deleteFavourite = (imageId, userId) => {
    return axios.delete(`${API_FAVOURITES}/images/${imageId}/users/${userId}`);
};

export const favouritesApi = {
    getFavouritesByUserId,
    addImageToFavourites,
    deleteFavourite,
};