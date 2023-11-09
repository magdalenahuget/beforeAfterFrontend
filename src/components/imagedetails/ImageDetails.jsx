import React, {useState} from 'react';
import Header from '../layout/Header';
import BottomNav from '../layout/BottomNav';
import BasicTabs from './BasicTabs';
import {Avatar, Typography, Box, IconButton} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled from 'styled-components';
import SimpleImageSlider from "react-simple-image-slider";

const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 11vh;
  margin-left: 5vw;
  gap: 2vw;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 896px; 
  position: relative; 
`;

const LogoAndNameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0;
`;

const StyledAvatar = styled(Avatar)`
  margin-right: 1vh;
`;

const CompanyName = styled(Typography)`
  font-weight: bold;
`;

const SliderWrapper = styled.div`
  position: relative;
`;

const FavoriteIconButton = styled(IconButton)`
  position: absolute;
  top: 10px; 
  right: 10px; 
  z-index: 10; 
`;
const ImageDetails = () => {
    const initialImages = [
        {url: "https://source.unsplash.com/random?wallpapers&sig=1", isFavourite: false},
        {url: "https://source.unsplash.com/random?wallpapers&sig=2", isFavourite: false},
        {url: "https://source.unsplash.com/random?wallpapers&sig=3", isFavourite: false}];

    const [images, setImages] = useState(initialImages);
    const [currentIndex, setCurrentIndex] = useState(0);

    const toggleFavourite = () => {
        const updatedImages = images.map((img, index) =>
            index === currentIndex ? { ...img, isFavourite: !img.isFavourite } : img
        );
        setImages(updatedImages);
    };

    return (
        <>
            <Header/>
            <Box sx={{ maxWidth: '100%', margin: 'auto', padding: '0' }}>
                <MainContainer>
                    <LeftContainer>
                        <LogoAndNameContainer>
                            <StyledAvatar
                                alt="Company Logo"
                                src="https://png.pngtree.com/template/20191014/ourmid/pngtree-home-renovation-logo-design-template-with-green-leaf-image_317632.jpg"
                                sx={{ width: 80, height: 80 }}
                            />
                            <CompanyName variant="h5">Budomex Sp. z o.o.</CompanyName>
                        </LogoAndNameContainer>
                        <FavoriteIconButton onClick={toggleFavourite}>
                            {images[currentIndex].isFavourite ? (
                                <FavoriteIcon sx={{ color: 'red' }} />
                            ) : (
                                <FavoriteBorderIcon sx={{ color: 'red' }} />
                            )}
                        </FavoriteIconButton>
                        <SliderWrapper>
                            <SimpleImageSlider
                                width={896}
                                height={504}
                                images={images.map(image => ({ url: image.url }))}
                                showBullets={true}
                                showNavs={true}
                                onClick={(idx) => setCurrentIndex(idx)}
                            />
                        </SliderWrapper>
                    </LeftContainer>
                    <BasicTabs/>
                </MainContainer>
            </Box>
            <BottomNav/>
        </>
    );
};

export default ImageDetails;
