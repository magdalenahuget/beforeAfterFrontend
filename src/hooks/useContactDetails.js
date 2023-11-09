import { useEffect, useState } from 'react';
import { contactDetailsApi } from '../api/contactDetailsApi';

const useContactDetails = (userId) => {
    const [contactDetails, setContactDetails] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        contactDetailsApi.getContactDetailsByUserId(userId)
            .then(response => {
                setContactDetails(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the contact details:', error);
                setError(error);
                setIsLoading(false);
            });
    }, [userId]);

    return { contactDetails, isLoading, error };
};

export default useContactDetails;