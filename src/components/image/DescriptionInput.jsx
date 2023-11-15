import React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

const DescriptionInput = ({ description, onDescriptionChange }) => {

    const handleDescription = (event) => {
        onDescriptionChange(event.target.value);
    };

    return (
        <Box sx={{ marginBottom: 2, width: '100%' }}>
            <TextField
                fullWidth
                id="outlined-helperText"
                label="Description"
                value={description}
                helperText="Please type service description"
                name="description"
                onChange={handleDescription}
            />
        </Box>
    );
};

export default DescriptionInput;