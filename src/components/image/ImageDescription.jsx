import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

const ImageDescription = ({ description }) => {
    return (
        <Box>
            <Typography variant="body1" textAlign="justify" component="div">
                {description}
            </Typography>
        </Box>
    );
};

export default ImageDescription;