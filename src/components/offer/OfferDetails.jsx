import React, { useState } from 'react';
import Header from '../layout/Header';
import BottomNav from '../layout/BottomNav';
import BasicTabs from './BasicTabs';
import { Avatar, Typography, Box, IconButton, Grid, useTheme, useMediaQuery } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SimpleImageSlider from "react-simple-image-slider";

const ImageDetails = () => {
    const initialImages = [
        { url: "https://source.unsplash.com/random?wallpapers&sig=1", isFavourite: false },
        { url: "https://source.unsplash.com/random?wallpapers&sig=2", isFavourite: false },
        { url: "https://source.unsplash.com/random?wallpapers&sig=3", isFavourite: false }
    ];

    const [images, setImages] = useState(initialImages);
    const [currentIndex, setCurrentIndex] = useState(0);

    const toggleFavourite = () => {
        const updatedImages = images.map((img, index) =>
            index === currentIndex ? { ...img, isFavourite: !img.isFavourite } : img
        );
        setImages(updatedImages);
    };

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Header />
            <Box sx={{ flexGrow: 1, mt: isSmallScreen ? theme.spacing(9) : theme.spacing(11) }}>
                <Grid container spacing={2} sx={{ px: '2vw' }}>
                    <Grid item xs={12} md={8}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Avatar
                                alt="Company Logo"
                                src="https://source.unsplash.com/random?company"
                                sx={{ width: 80, height: 80, mr: 2 }}
                            />
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                Budomex Sp. z o.o.
                            </Typography>
                        </Box>
                        <Box sx={{
                            position: 'relative',
                            width: '100%',
                            paddingTop: '56.25%',
                        }}>
                            <IconButton
                                onClick={toggleFavourite}
                                sx={{
                                    position: 'absolute',
                                    top: 10,
                                    right: 10,
                                    zIndex: 10
                                }}
                            >
                                {images[currentIndex].isFavourite ? (
                                    <FavoriteIcon sx={{ color: 'red' }} />
                                ) : (
                                    <FavoriteBorderIcon sx={{ color: 'red' }} />
                                )}
                            </IconButton>
                            <Box sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '80%',
                            }}>
                                <SimpleImageSlider
                                    width={'100%'}
                                    height={'100%'}
                                    images={images.map(image => ({ url: image.url }))}
                                    showBullets={true}
                                    showNavs={true}
                                    onClick={(idx) => setCurrentIndex(idx - 1)}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BasicTabs />
                    </Grid>
                </Grid>
            </Box>
            <BottomNav sx={{ mt: 2 }} />
        </>
    );
};

export default ImageDetails;
