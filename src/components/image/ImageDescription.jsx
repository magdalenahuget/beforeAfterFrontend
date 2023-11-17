import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import useImageData from '../../hooks/useImageData';

const ImageDescription = ({ userId, imageId }) => {
    // Assuming useImageData now provides a loading and error state
    const { images, isLoading, error } = useImageData();

    const image = images.find(img => img.id === imageId);

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
            <Typography variant="body1" textAlign="justify" component="div">
                {image?.description}
            </Typography>
        </Box>
    );
};

export default ImageDescription;