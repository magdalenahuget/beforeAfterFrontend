import React from 'react';
import {useLocation} from 'react-router-dom';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from '@mui/material/Box';
import useFavourites from '../../hooks/useFavourites';
import { useNavigate } from 'react-router-dom';
import FavoriteIconButton from "../layout/FavoriteIconButton";
import DeleteIconButton from "../layout/DeleteIconButton";

const ImageCard = ({image, onDeleteImage}) => {

    const userId = 1;   //  [TEST USER]  ==> to delete
    const {handleToggleFavourite, favourites} = useFavourites(userId);
    const isFavourite = favourites.some(fav => fav.id === image.id);
    const location = useLocation();
    const navigate = useNavigate();

    const goToOffer = () => {
        navigate(`/offer/${image.id}`);
    };


    const showFavoriteIcon = location.pathname === '/home' || location.pathname === '/offer';
    const showDeleteIcon = location.pathname === '/images' || location.pathname === '/favourites' || location.pathname === '/profile';

    return (
        <Card onClick={goToOffer}  sx={{position: 'relative', height: '100%', display: 'flex', flexDirection: 'column'}}>
            <CardMedia
                component="img"
                image={image.url}
                alt={`Image ${image.id}`}
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />
            <Box sx={{position: 'absolute', top: 0, right: 0}}>
                {showFavoriteIcon && (
                    <FavoriteIconButton
                        isFavourite={isFavourite}
                        onToggleFavourite={() => handleToggleFavourite(image)}
                        image={image}
                    />
                )}
                {showDeleteIcon && (
                    <DeleteIconButton
                        onDeleteImage={onDeleteImage}
                        image={image}
                    />
                )}
            </Box>
        </Card>
    );
}

export default ImageCard;
