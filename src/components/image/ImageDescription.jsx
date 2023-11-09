import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import useImages from '../../hooks/useImage';

const ImageDescription = ({ userId, imageId }) => {
    const { images, isLoading, error } = useImages(userId);

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