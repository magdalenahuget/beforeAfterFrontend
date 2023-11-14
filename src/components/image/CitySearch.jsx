import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';

const CitySearch = () => {
        const [cities, setCities] = useState([]);
        const [selectedCity, setSelectedCity] = useState('');

        // CITY
        const handleSelectedCity = (event) => {
            setSelectedCity(event.target.value);
        };


        return (
            <Box sx={{marginBottom: 2, width: '100%'}}>
                <Autocomplete
                    disablePortal
                    id="combo-box"
                    options={cities}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="City" />}
                    onChange={handleSelectedCity}
                />
            </Box>
        );
    }
;

export default CitySearch;