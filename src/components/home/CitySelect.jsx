import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CitySelect = ({cities,selectedCity,onChange}) => {

    return (
        <Box   sx={{
            pt:2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50%', // Ustaw szerokość na 50% szerokości ekranu
            mx: 'auto', // Ustaw marginesy auto, aby wyśrodkować


        }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedCity}
                    label="City"
                    onChange={onChange}
                >
                    {cities.map((city) => (
                        <MenuItem key={city} value={city}>
                            {city}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default CitySelect;