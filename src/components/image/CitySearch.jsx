import React, {useState} from 'react';
import Box from "@mui/material/Box";
import axios from "axios";
import Autocomplete from '@mui/material/Autocomplete';

const CitySearch = () => {
    const URL_CITY_SEARCH = `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=`;
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');

    const handleSelectedCity = (event) => {
        setSelectedCity(event.target.value);
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

    return (
        <Box sx={{marginBottom: 2, width: '100%'}}>
            <Autocomplete
                disablePortal
                id="combo-box"
                options={cities}
                sx={{width: 300}}
                onChange={handleSelectedCity}
            />
        </Box>
    );
};

export default CitySearch;