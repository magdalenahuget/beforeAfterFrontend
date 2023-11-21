import axios from 'axios';

const API_USER = `${process.env.REACT_APP_API_URL}/users`;

export const getAboutMeByUserId = (userId) => {
    return axios.get(`${API_USER}/${userId}/about_me`);
};
export const updateAboutMeByUserId = (userId, aboutMe) => {
    return axios.patch(`${API_USER}/${userId}/about_me`, aboutMe);
};

export const getUserById = (userId) =>{
    return axios.get(`${API_USER}/${userId}`)
}

export const updateUserById = (userId, user) =>{
     return axios.put(`${API_USER}/${userId}`, user)
}

export const userDataApi = {
    getAboutMeByUserId,
    updateAboutMeByUserId,
    getUserById,
    updateUserById
};