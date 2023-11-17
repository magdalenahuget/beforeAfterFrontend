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
    const { images } = useImageData();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState({
        url: '',
        cityName: '',
        imageId: '',
        description: ''
    });

    // Ten useEffect będzie aktualizował currentImage za każdym razem,
    // gdy currentImageIndex lub images się zmieni.
    useEffect(() => {
        if (images.length > 0 && currentImageIndex < images.length) {
            const newCurrentImage = images[currentImageIndex];
            setCurrentImage({
                url: newCurrentImage.url,
                cityName: newCurrentImage.cityName,
                imageId: newCurrentImage.imageId,
                description: newCurrentImage.description
            });
            console.log('Aktualne miasto:', newCurrentImage.cityName);
            console.log('Aktualny opis:', newCurrentImage.description);
        }
    }, [currentImageIndex, images]);

    // Ta funkcja aktualizuje currentImageIndex, który następnie spowoduje aktualizację currentImage poprzez useEffect
    const onSliderClick = (idx) => {
        setCurrentImageIndex(idx - 1); // Zaktualizuj index, useEffect zajmie się resztą
    };

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const avatarSize = isSmallScreen ? '5vw' : '4vw';
    const minAvatarSize = '3vw';

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
                                <LocationOnIcon sx={{ mr: 0.5, ml: 2, mt: -2 }} />
                                <Typography variant="subtitle1" sx={{ mt: -2 }}>
                                    {currentImage.cityName}
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
                                    key={images.length} // Użyj długości images jako klucza
                                    width={'100%'}
                                    height={'100%'}
                                    images={images.map(image => ({ url: image.url }))}
                                    showBullets={true}
                                    showNavs={true}
                                    onClick={onSliderClick}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} lg={4}>
                        <BasicTabs
                            userId={userId}
                            imageId={currentImage.imageId}
                            description={currentImage.description}
                        />
                    </Grid>
                </Grid>
            </Box>
            <BottomNav sx={{ mt: 1 }} />
        </>
    );
};

export default OfferDetails;