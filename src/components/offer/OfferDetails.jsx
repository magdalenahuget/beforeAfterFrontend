import React, {useEffect, useState} from 'react';
import Header from '../layout/Header';
import BottomNav from '../layout/BottomNav';
import BasicTabs from './BasicTabs';
import {Avatar, Typography, Box, Grid, useTheme, useMediaQuery} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SimpleImageSlider from "react-simple-image-slider";
import useImages from "../../hooks/useImage";

const OfferDetails = ({ userId }) => {

    const { images: fetchedImages, isLoading, error } = useImages(userId);
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentCity, setCurrentCity] = useState('');

    useEffect(() => {
        if (fetchedImages && fetchedImages.length > 0) {
            setImages(fetchedImages.map(img => ({
                url: img.url
            })));
            setCurrentCity(fetchedImages[0].cityName);
        }
    }, [fetchedImages]);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const avatarSize = isSmallScreen ? '5vw' : '4vw';
    const minAvatarSize = '3vw';

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const onSliderClick = (idx) => {
        const imageId = fetchedImages[idx].id;
        const image = fetchedImages.find(img => img.id === imageId);
        if (image) {
            setCurrentCity(image.cityName);
        }
    };

    const currentImageId = fetchedImages.length > 0 ? fetchedImages[currentIndex].id : null;

    return (
        <>
            <Header />
            <Box sx={{ flexGrow: 1, mt: isSmallScreen ? theme.spacing(8) : theme.spacing(9) }}>
                <Grid container spacing={2} sx={{ px: '2vw' }}>
                    <Grid item xs={12} md={7} lg={8} sx={{ pr: isSmallScreen ? '0' : '2%' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: -1 }}>
                                <Avatar
                                    alt="Company Logo"
                                    src="https://source.unsplash.com/random?company"
                                    sx={{
                                        width: avatarSize,
                                        height: avatarSize,
                                        minWidth: minAvatarSize,
                                        minHeight: minAvatarSize,
                                        mr: 2,
                                        mb: -1
                                    }}
                                />
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                    Budomex Sp. z o.o.
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', ml: 10 }}>
                                <LocationOnIcon sx={{ mr: 0.5, ml: 2, mt:-2 }} />
                                <Typography variant="subtitle1" sx={{ mt:-2 }}>
                                    {currentCity}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            position: 'relative',
                            width: '100%',
                            paddingTop: '56.25%', // 16:9 aspect ratio
                            mt: 2,
                        }}>
                            <Box sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '80%',
                            }}>
                                <SimpleImageSlider
                                    key={images.length > 0 ? images[0].url : 'slider-key'}
                                    width={'100%'}
                                    height={'100%'}
                                    images={images}
                                    showBullets={true}
                                    showNavs={true}
                                    onClick={onSliderClick}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} lg={4}>
                        <BasicTabs userId={userId}  imageId={currentImageId} />
                    </Grid>
                </Grid>
            </Box>
            <BottomNav sx={{ mt: 1 }} />
        </>
    );
};

export default OfferDetails;