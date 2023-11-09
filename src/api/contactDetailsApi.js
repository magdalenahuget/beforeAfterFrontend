import axios from 'axios';

const API_CONTACT_DETAILS = `${process.env.REACT_APP_API_URL}/contact_details`;

const getContactDetailsByUserId = (userId) => {
    return axios.get(`${API_CONTACT_DETAILS}/users/${userId}`);
};

const updateContactDetailsByUserId = (userId, contactDetails) => {
    return axios.patch(`${API_CONTACT_DETAILS}/users/${userId}`, contactDetails);
};

const createContactDetails = (contactDetails) => {
    return axios.post(`${API_CONTACT_DETAILS}`, contactDetails);
};

export const contactDetailsApi = {
    getContactDetailsByUserId,
    updateContactDetailsByUserId,
    createContactDetails,
};
