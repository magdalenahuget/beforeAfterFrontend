import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const useImages = (userId) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!userId) return;

        setIsLoading(true);

        const fetchImages = async () => {
            try {
                const params = new URLSearchParams({ usersID: [userId] }).toString();
                const response = await axios.get(`${API_URL}/images?${params}`);

                const imagesWithDetails = response.data.map(img => ({
                    ...img,
                    url: `data:image/jpeg;base64,${img.file}`,
                    cityName: img.cityName,
                    description: img.description
                }));

                setImages(imagesWithDetails);
            } catch (err) {
                console.error('Error fetching images:', err);
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchImages().catch(err => {
            console.error('Unhandled error in fetchImages:', err);
        });
    }, [userId]);

    return { images, isLoading, error };
};

export default useImages;
