import React, {useState} from 'react';
import useImageData from '../../hooks/useImageData';
import ImagesList from "../image/ImagesList";
import { Box, CircularProgress, Typography } from '@mui/material';

const MyImages = ({ userId }) => {
    //TODO:
    /* For test, to display my all images, user ID has been set to "1"
    In future please uncomment this below line:
    const { images, isLoading, error } = useImage(userId);
    or set up id accordingly */
    const userIdForTest = 1;
    const { images, isLoading, error } = useImageData(userIdForTest);
    const [titleText, setTitleText] = useState("My Images");

    // const handleToggleFavourite = (imageId, isFavourite) => {
    //     if (isFavourite) {
    //         removeFavourite(imageId);
    //     } else {
    //         addFavourite(imageId);
    //     }
    // };

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
                Error loading my images.
            </Typography>
        );
    }

    return (
        <>
            <ImagesList
                images={images}
                // titleText={titleText}
            />
        </>
    );
};

export default MyImages;