import { useEffect, useState } from 'react';
import { getImageDescriptionById } from '../api/imageApi';

const useImageDescription = (imageId) => {
    const [imageDescription, setImageDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getImageDescriptionById(imageId)
            .then(response => {
                setImageDescription(response.data.description);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the image description:', error);
                setError(error);
                setIsLoading(false);
            });
    }, [imageId]);

    return { imageDescription, isLoading, error };
};

export default useImageDescription;