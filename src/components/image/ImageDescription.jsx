import React from 'react';
import useImage from '../../hooks/useImage'
import { Box, Typography, CircularProgress } from '@mui/material';

const ImageDescription = ({ imageId }) => {
    const { imageData, isLoading, error } = useImage(imageId);

    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Typography color="error" textAlign="center">
                Error loading the image description.
            </Typography>
        );
    }

    return (
        <Box>
            <Typography variant="body1" textAlign="justify">
                {imageData?.description}
            </Typography>
        </Box>
    );
};

export default ImageDescription;