import {useState} from 'react';
import {emailsDataApi as emailsApi} from "../api/emailsApi";

const useSendEmail = (apiMethod) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendEmail = async (emailData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await apiMethod(emailData);
            console.log('Email sent:', response.data);
        } catch (error) {
            console.error('Error sending email:', error);
            setError(error);
        }
        setIsLoading(false);
    };

    return {sendEmail, isLoading, error};
};

// Specific hooks that use the generic one with the appropriate API call
export const sendRegistrationEmail = () => {
    return useSendEmail(emailsApi.sendRegistrationEmail);
};

export const sendPasswordResetEmail = () => {
    return useSendEmail(emailsApi.sendPasswordResetEmail);
};

export const sendContactEmail = () => {
    return useSendEmail(emailsApi.sendContactEmail);
};