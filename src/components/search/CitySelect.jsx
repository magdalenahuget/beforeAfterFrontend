import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SelectedImages from "./SelectedImages";


export default function CitySelect() {
    const [selectedCity, setSelectedCity] = React.useState('');
    const [CityOptions, setCityOptions] = React.useState([]);
    const [images, setImages] = React.useState([]);
    

    async function handleSearchCategories() {
        try {
            const queryParams = {
                approvalStatus: false
            };
            const queryString = new URLSearchParams(queryParams).toString();
            const url = `http://localhost:8080/api/v1/images?${queryString}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            console.log('Received data:', data);
            setImages(data);
            const uniqueCityNames = [...new Set(data.map(image => image.cityName))]
            setCityOptions(uniqueCityNames);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    React.useEffect(() => {
        handleSearchCategories();
    }, []);

    const handleChange = (event) => {
        setSelectedCity(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 20, pt:3}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedCity}
                    label="City"
                    onChange={handleChange}
                >
                    {CityOptions.map((image) => (
                        <MenuItem key={image} value={image}>
                            {image}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <SelectedImages selectedCity={selectedCity} allImages={images} />
        </Box>
    );
}