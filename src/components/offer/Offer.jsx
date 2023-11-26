import React, {useEffect, useState} from 'react';
import Header from '../layout/Header';
import BottomNav from '../layout/BottomNav';
import BasicTabs from './BasicTabs';
import {Avatar, Typography, Box, Grid, useTheme, useMediaQuery} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SimpleImageSlider from "react-simple-image-slider";
import useImageData from "../../hooks/useImageData";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {userDataApi} from "../../api/userApi";

const Offer = () => {
    const {imageId} = useParams();
    const location = useLocation();
    const offerUserId = location.state?.userId;
    const theme = useTheme();
    const {userImages} = useImageData(offerUserId);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState({
        url: '',
        cityName: '',
        imageId: '',
        description: ''
    });
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const avatarSize = isSmallScreen ? '5vw' : '5vw';
    const minAvatarSize = '5vw';


    useEffect(() => {
        userDataApi.getUserById(offerUserId)
            .then(response => {
                setUser(response.data);
            });
    }, [offerUserId]);


    useEffect(() => {
        if (userImages.length > 0) {
            const index = userImages.findIndex(img => img.id.toString() === imageId);
            if (index !== -1) {
                setCurrentImageIndex(index);
                const newCurrentImage = userImages[index];
                setCurrentImage({
                    url: newCurrentImage.file,
                    cityName: newCurrentImage.cityName,
                    imageId: newCurrentImage.id,
                    description: newCurrentImage.description
                });
            } else {
                console.error("Image with id not found:", imageId);
            }
        }
    }, [imageId, userImages]);

    const handleNavClick = (toRight) => {
        let newImageIndex = userImages.findIndex(img => img.id === currentImage.imageId);
        newImageIndex = toRight ? newImageIndex + 1 : newImageIndex - 1;

        if (newImageIndex >= userImages.length) {
            newImageIndex = 0;
        } else if (newImageIndex < 0) {
            newImageIndex = userImages.length - 1;
        }

        navigate(`/offer/${userImages[newImageIndex].id}`, {state: {userId: userImages[newImageIndex].userId}});

        setCurrentImage({
            url: userImages[newImageIndex].file,
            cityName: userImages[newImageIndex].cityName,
            imageId: userImages[newImageIndex].id,
            description: userImages[newImageIndex].description
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
                                alt={`${user.userName} Logo`}
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
                                    {user?.userName}
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
                                    key={userImages.length}
                                    width={'100%'}
                                    height={'100%'}
                                    images={userImages.map(image => ({url: image.url}))}
                                    showBullets={true}
                                    showNavs={true}
                                    onClickNav={handleNavClick}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} lg={4}>
                        <BasicTabs
                            offerUserId={offerUserId}
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