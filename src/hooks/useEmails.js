import { useState } from 'react';
import { emailsDataApi as emailsApi } from "../api/emailsApi";

export const useSendEmail = (apiMethod) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const send = async (emailData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await apiMethod(emailData);
            console.log('Email sent:', response.data);
        } catch (error) {
            console.error('Error sending email:', error);
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return { send, isLoading, error };
};

export const useSendRegistrationEmail = () => {
    return useSendEmail(emailsApi.sendRegistrationEmail);
};

export const useSendPasswordResetEmail = () => {
    return useSendEmail(emailsApi.sendPasswordResetEmail);
};

export const useSendContactEmail = () => {
    return useSendEmail(emailsApi.sendContactEmail);
};
