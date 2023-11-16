import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

 export const getCategories = () => {
    return axios.get(`${API_URL}/categories`)
};
export const categoriesApi = {getCategories}