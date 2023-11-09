// import { useState, useEffect } from 'react';
// import { imageDataApi } from '../api/imageApi';

// const useImage = (imageId) => {
//     const [imageData, setImageData] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//         (async () => {
//             if (!imageId) return;
//
//             setIsLoading(true);
//             try {
//                 const response = await imageDataApi.getImageDescriptionById(imageId);
//                 setImageData(response.data);
//             } catch (error) {
//                 console.error('Error fetching image data:', error);
//                 setError(error);
//             } finally {
//                 setIsLoading(false);
//             }
//         })();
//     }, [imageId]);
//
//     return { imageData, isLoading, error };
// };
//
// export default useImage;

import { useState, useEffect } from 'react';
import { imageDataApi } from '../api/imageApi';

const useImage = (imageId) => {
    const [imageData, setImageData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        (async () => {
            if (!imageId) return;

            setIsLoading(true);
            try {
                const response = await imageDataApi.getImageDescriptionById(imageId);
                setImageData(response.data);
            } catch (error) {
                console.error('Error fetching image data:', error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [imageId]);

    return { imageData, isLoading, error };
};

export default useImage;