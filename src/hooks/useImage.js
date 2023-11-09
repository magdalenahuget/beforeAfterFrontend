//
//
// import { useState, useEffect } from 'react';
// import { imageDataApi } from '../api/imageApi';
//
// const useImage = (imageId) => {
//     const [imageData, setImageData] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//
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
import axios from 'axios';

// Zakładamy, że API_URL jest zdefiniowane w pliku .env i wskazuje na backend API
const API_URL = process.env.REACT_APP_API_URL;

const useImages = (userId) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Jeżeli userId nie jest zdefiniowane, nie wykonujemy zapytania
        if (!userId) return;

        setIsLoading(true);

        // Funkcja do wykonania asynchronicznego zapytania do API
        const fetchImages = async () => {
            try {
                // Przygotowanie parametrów dla zapytania GET
                const params = new URLSearchParams({ usersID: [userId] }).toString();

                // Wykonanie zapytania GET z odpowiednimi parametrami
                const response = await axios.get(`${API_URL}/images?${params}`);

                // Ustawienie odpowiedzi w stanie komponentu
                setImages(response.data);
            } catch (err) {
                // Obsługa błędów, jeśli zapytanie się nie powiedzie
                console.error('Error fetching images:', err);
                setError(err);
            } finally {
                // Kończenie ładowania niezależnie od wyniku zapytania
                setIsLoading(false);
            }
        };

        // Wywołanie asynchronicznej funkcji fetchImages
        fetchImages();
    }, [userId]);

    // Zwracanie obiektu z obrazami, stanem ładowania i ewentualnym błędem
    return { images, isLoading, error };
};

export default useImages;
