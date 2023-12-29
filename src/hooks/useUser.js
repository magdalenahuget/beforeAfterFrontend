import {useEffect, useState} from 'react';
import {getUserById} from '../api/userApi';

const useUser = (userId) => {
    const [userName, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (userId) {
            console.log(userId);
            setIsLoading(true);
            getUserById(userId)
                .then(response => {
                    const name = response.data.userName.charAt(0).toUpperCase() + response.data.userName.slice(1);
                    setUserName(name);
                    console.log("User name is: " + name);
                })
                .catch(error => {
                    console.error('Error fetching user name:', error);
                    setError(error);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [userId]);


    return {userName, isLoading, error};
};

export default useUser;