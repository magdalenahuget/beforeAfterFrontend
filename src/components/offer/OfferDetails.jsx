import React, {useEffect, useState} from 'react';
import Header from '../layout/Header';
import BottomNav from '../layout/BottomNav';
import BasicTabs from './BasicTabs';
import {Avatar, Typography, Box, Grid, useTheme, useMediaQuery} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SimpleImageSlider from "react-simple-image-slider";
import useImageData from "../../hooks/useImageData";

const OfferDetails = ({userId}) => {
    const theme = useTheme();
    const {images} = useImageData(userId);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState({
        url: '',
        cityName: '',
        imageId: '',
        description: ''
    });

    useEffect(() => {
        if (images.length > 0 && currentImageIndex < images.length) {
            const newCurrentImage = images[currentImageIndex];
            setCurrentImage({
                url: newCurrentImage.file, // Zakładam, że 'file' zawiera URL do obrazu.
                cityName: newCurrentImage.cityName,
                imageId: newCurrentImage.id, // Zmiana z imageId na id
                description: newCurrentImage.description
            });
        }
    }, [currentImageIndex, images]);

    /**
     *
     * @param newIndex  -  indexes in SimpleImageSlider start from 1
     */
    const handleSlideChange = (newIndex) => {
        setCurrentImageIndex(newIndex - 1);
    };

    //!delete
    const handleImageClick = (index) => {
        console.log(`Clicked on image index: ${index}`);
        if (images && index >= 0 && index < images.length) {
            const image = images[index];
            console.log(`Clicked image object:`, image);
            if (image && image.id) { // Zmieniamy imageId na id
                console.log(`Clicked on image with ID: ${image.id}`); // Tutaj również zmieniamy imageId na id
            } else {
                console.error('Image ID is undefined or image object is not valid:', image);
            }
        } else {
            console.error(`Invalid index or images array is not defined: index=${index}, images=`, images);
        }
    };

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const avatarSize = isSmallScreen ? '5vw' : '5vw';
    const minAvatarSize = '5vw';

    return (
        <>
            <Header/>
            <Box sx={{flexGrow: 1, mt: isSmallScreen ? theme.spacing(8) : theme.spacing(9)}}>
                <Grid container spacing={2} sx={{px: '2vw'}}>
                    <Grid item xs={12} md={7} lg={8} sx={{pr: isSmallScreen ? '0' : '2%'}}>
                        <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'row', mt: 4, mb: 0}}>
                            <Avatar
                                alt="Company Logo"
                                src="https://source.unsplash.com/random?company"
                                sx={{
                                    width: avatarSize,
                                    height: avatarSize,
                                    minWidth: minAvatarSize,
                                    minHeight: minAvatarSize,
                                    mr: 2
                                }}
                            />
                            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                                <Typography variant="h5" sx={{fontWeight: 'bold'}}>
                                    Budomex Sp. z o.o.
                                </Typography>
                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                    <LocationOnIcon sx={{ml: -0.5, mr: 0.5}}/>
                                    <Typography variant="subtitle1">
                                        {currentImage.cityName}
                                    </Typography>
                                </Box>
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
                                    key={images.length}
                                    width={'100%'}
                                    height={'100%'}
                                    images={images.map(image => ({url: image.url}))}
                                    showBullets={true}
                                    showNavs={true}
                                    onChange={handleSlideChange}
                                    onClick={handleImageClick}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} lg={4}>
                        <BasicTabs
                            userId={userId}
                            imageId={currentImage.imageId}
                            description={currentImage.description}
                            isSmallScreen={isSmallScreen}
                        />
                    </Grid>
                </Grid>
            </Box>
            <BottomNav sx={{mt: 1}}/>
        </>
    );
};

export default OfferDetails;