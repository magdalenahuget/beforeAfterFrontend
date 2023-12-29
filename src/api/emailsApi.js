import axios from 'axios';
import {useState} from 'react';

const API_EMAILS = `${process.env.REACT_APP_API_URL}/emails`;

const sendRegistrationEmail = (registrationData) => {
    return axios.post(`${API_EMAILS}/register`, registrationData);
};

const sendPasswordResetEmail = (passwordResetData) => {
    return axios.post(`${API_EMAILS}/reset-password`, passwordResetData);
};

const sendContactEmail = (contactFormData) => {
    return axios.post(`${API_EMAILS}/contact`, contactFormData);
};
export const emailsDataApi = {
    sendRegistrationEmail,
    sendPasswordResetEmail,
    sendContactEmail,
};