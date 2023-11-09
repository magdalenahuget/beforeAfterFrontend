import axios from 'axios';

const API_IMAGE = `${process.env.REACT_APP_API_URL}/images`;

export const getImageDescriptionById = (imageId) => {
    return axios.get(`${API_IMAGE}/${imageId}`);
};

export const imageDataApi = {
    getImageDescriptionById,
};