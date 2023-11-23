import {useEffect, useState} from "react";
import {categoriesApi} from "../api/categoriesApi";
import {getImagesByDynamicFilter, imagesApi} from "../api/imagesApi";


const useImageData = (userId) => {
    const [cities, setCities] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([])
    const [images, setImages] = useState([])
    const [userImages, setUserImages] = useState([]);


    useEffect(() => {
        categoriesApi.getCategories()
            .then(response => {
                const sortedCategories = response.data.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
                setCategories(sortedCategories);
                setSelectedCategories(sortedCategories)
            })
            .catch(error => console.error('Error fetching categories: ', error))
    }, []);

    useEffect(() => {
        imagesApi.getImagesByDynamicFilter({approvalStatus: false})//TODO do zmiany na true w finalnej
            .then(response => {
                const uniqueCities = [...new Set(response.data.map(city => city.cityName))];
                setCities(uniqueCities.sort((a, b) => a - b))
            })
            .catch(error => console.error('Error fetching cities: ', error))
    }, []);

    useEffect(() => {
        const nameCategories = selectedCategories.map(selectedCategory => selectedCategory.categoryName).join(", ");
        imagesApi.getImagesByDynamicFilter({
            approvalStatus: false,
            categories: nameCategories,
            cities: selectedCity,
        })
            .then(response => {
                const imagesWithDetails = response.data.map(img => ({
                    ...img,
                    url: `data:image/jpeg;base64,${img.file}`,
                    cityName: img.cityName,
                    description: img.description
                }));

                setImages(imagesWithDetails)
            })
    }, [selectedCity, selectedCategories]);

    useEffect(() => {
        if (userId) {
            imagesApi.getImagesByDynamicFilter({
                approvalStatus: false, // TODO: Change to true in final version
                usersId: userId,
            })
                .then(response => {
                    const imagesWithDetails = response.data.map(img => ({
                        ...img,
                        url: `data:image/jpeg;base64,${img.file}`,
                        cityName: img.cityName,
                        description: img.description
                    }));
                    setUserImages(imagesWithDetails);
                })
                .catch(error => console.error('Error fetching images by user ID: ', error));
        }
    }, [userId]);


    const deleteImage = (imageId) => {
        imagesApi.deleteImage(imageId)
            .then(() => {
                setImages(prevImages => prevImages.filter(image => image.id !== imageId));
            })
            .catch(error => {
                console.error('Error deleting image: ', error);
            });
    };

    const handleCategorySelect = (category) => {
        setSelectedCategories(prevState =>
            prevState.includes(category)
                ? prevState.filter(prevCategory => prevCategory !== category)
                : [...prevState, category]
        );
        console.log(selectedCategories);
    };

    const handleChange = (event) => {
        setSelectedCity(event.target.value);
        console.log(selectedCity);
    };

    return {
        cities,
        categories,
        selectedCity,
        selectedCategories,
        images,
        userImages,
        handleCategorySelect,
        handleChange,
        deleteImage,
    };
};

export default useImageData;

