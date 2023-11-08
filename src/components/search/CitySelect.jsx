import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CitySelect() {
    const [images, setImages] = React.useState([]);
    const [cityName, setCityName] = React.useState('');
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
            const uniqueCityNames = [...new Set(data.map(image => image.cityName))]
            setImages(uniqueCityNames);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    React.useEffect(() => {
        handleSearchCategories();
    }, []);

    const handleChange = (event) => {
        setCityName(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 20, pt:3}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={cityName}
                    label="City"
                    onChange={handleChange}
                >
                    {images.map((image) => (
                        <MenuItem key={image} value={image}>
                            {image}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}