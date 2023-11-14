import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import axios from "axios";
import Autocomplete from '@mui/material/Autocomplete';
import {TextField} from "@mui/material";


const CitySearch = ({selectedCity, setSelectedCity}) => {
    const API_KEY = `${process.env.REACT_APP_CITIES_API_KEY}`;
    const URL_CITY_SEARCH = `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=`;
    const [cities, setCities] = useState([]);

    const handleSelectedCity = (event, value) => {
        setSelectedCity(value);
    };

    const fetchCitiesFromApi = async (query) => {
        try {
            const response = await axios.get(`${URL_CITY_SEARCH}${query}`);
            const citiesData = response.data;
            console.log(response.data);
            const cityNames = citiesData.map((location) => location.name);
            setCities(cityNames);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (selectedCity.length > 0) {
            fetchCitiesFromApi(selectedCity);
        }
    }, [selectedCity]);

    return (
        <Box sx={{marginBottom: 2, width: '100%'}}>
            <Autocomplete
                disablePortal
                id="combo-box"
                options={cities}
                sx={{width: 300}}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="City"
                        onChange={(event) => fetchCitiesFromApi(event.target.value)}
                    />
                )}
                onChange={(event, value) => handleSelectedCity(event, value)}
            />
        </Box>
    );
};

export default CitySearch;