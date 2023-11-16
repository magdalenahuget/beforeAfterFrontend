import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}/images`

export const getImagesByDynamicFilter = (params) =>{
    return axios.get(`${API_URL}`, {params})
}

export const imagesApi = {getImagesByDynamicFilter}