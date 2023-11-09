import React from 'react';
import useImageDescription from '../../hooks/useImageDescription';
import { Box, Typography, CircularProgress } from '@mui/material';

const ImageDescription = ({ imageId }) => {
    const { imageDescription, isLoading, error } = useImageDescription(imageId);

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
                {imageDescription}
            </Typography>
        </Box>
    );
};

export default ImageDescription;