import React, {useEffect, useState} from 'react';
import axios from "axios";
import CategoriesButton from "./CategoriesButton";
import CitySelect from "./CitySelect";
import ShowImages from "./ShowImages";
import Header from "../layout/Header";
import BottomNav from "../layout/BottomNav";


export default function Home() {
    const [cities, setCities] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([])
    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/categories`)
            .then(response => {
                setCategories(response.data.sort((a, b) => a.categoryName.localeCompare(b.categoryName)));
                setSelectedCategories(response.data)
            })
            .catch(error => console.error('Error fetching categories: ', error))
    }, []);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/images?approvalStatus=false`)//TODO do zmiany na true w finalnej wersji
            .then(response => {
                const uniqueCities = [...new Set(response.data.map(city => city.cityName))];
                setCities(uniqueCities.sort((a, b) => a - b));


            })
            .catch(error => console.error('Error fetching cities: ', error))
    }, [])

    useEffect(() => {
        const nameCategories = selectedCategories.map(selectedCategory => selectedCategory.categoryName);
        axios.get(`${process.env.REACT_APP_API_URL}/images?approvalStatus=false&cities=${selectedCity}&categories=${nameCategories}`)
            .then(response => {
                setImages(response.data)
            })
    }, [selectedCity, selectedCategories]);

    const handleCategorySelect = (category) => {
        setSelectedCategories(prevState =>
            prevState.includes(category)
                ? prevState.filter(prevCategory => prevCategory !== category)
                : [...prevState, category]
        );
        console.log(selectedCategories)
    };

    const handleChange = (event) => {
        setSelectedCity(event.target.value);
        console.log(selectedCity)
    };

    return (
        <div>
            <Header />
            <CategoriesButton
                categories={categories}
                onSelect={handleCategorySelect}
                selectedCategories={selectedCategories}
            />
            <CitySelect
                cities={cities}
                selectedCity={selectedCity}
                onChange={handleChange}
            />
            <ShowImages
                images={images}
            />
            <BottomNav />


        </div>
    );
};
