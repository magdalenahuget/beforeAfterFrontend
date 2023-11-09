import { useEffect, useState } from 'react';
import { getAboutMeByUserId } from '../api/userApi'

const UseAboutMe = (userId) => {
    const [aboutMeInfo, setAboutMeInfo] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getAboutMeByUserId(userId)
            .then(response => {
                setAboutMeInfo(response.data.aboutMe);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the about me information:', error);
                setError(error);
                setIsLoading(false);
            });
    }, [userId]);

    return { aboutMeInfo, isLoading, error };
};

export default UseAboutMe;