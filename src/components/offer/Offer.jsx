import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Header from '../layout/Header';
import BottomNav from '../layout/BottomNav';
import BasicTabs from './BasicTabs';
import {Avatar, Typography, Box, Grid, useTheme, useMediaQuery} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SimpleImageSlider from "react-simple-image-slider";
import useImageData from "../../hooks/useImageData";

const Offer = ({userId}) => {
    const {imageId} = useParams();
    const theme = useTheme();
    const {images} = useImageData();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState({
        url: '',
        cityName: '',
        imageId: '',
        description: ''
    });

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const avatarSize = isSmallScreen ? '5vw' : '5vw';
    const minAvatarSize = '5vw';


    //move useEffect to separate file into hooks folder.
    //implement dynamic avatar change taken from profile data
    //modify screen responsivity
    useEffect(() => {
        if (images.length > 0 && currentImageIndex < images.length) {
            const newCurrentImage = images[currentImageIndex];
            setCurrentImage({
                url: newCurrentImage.file,
                cityName: newCurrentImage.cityName,
                imageId: newCurrentImage.id,
                description: newCurrentImage.description
            });
        }
    }, [currentImageIndex, images]);


    const handleNavClick = (toRight) => {
        let newImageIndex = toRight ? currentImageIndex + 1 : currentImageIndex - 1;

        if (newImageIndex >= images.length) {
            newImageIndex = 0;
        } else if (newImageIndex < 0) {
            newImageIndex = images.length - 1;
        }

        setCurrentImageIndex(newImageIndex);
        setCurrentImage({
            url: images[newImageIndex].file,
            cityName: images[newImageIndex].cityName,
            imageId: images[newImageIndex].id,
            description: images[newImageIndex].description
        });
    };


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
                                    onClickNav={handleNavClick}
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

export default Offer;