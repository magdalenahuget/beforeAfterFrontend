import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';

const FavoriteIconButton = ({ isFavourite, onToggleFavourite, image }) => (
    <IconButton
        aria-label={isFavourite ? "remove from favorites" : "add to favorites"}
        onClick={() => onToggleFavourite(image)}
    >
        {isFavourite ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon sx={{ color: 'red' }} />}
    </IconButton>
);

const DeleteIconButton = ({ onDeleteImage, image }) => (
    <IconButton
        aria-label="delete image"
        onClick={() => onDeleteImage(image.id)}
    >
        <DeleteIcon sx={{ color: 'red' }} />
    </IconButton>
);

const ImageCard = ({ image, onToggleFavourite, onDeleteImage }) => {
    const location = useLocation();
    const showFavoriteIcon = location.pathname === '/home' || location.pathname === '/offer';
    const showDeleteIcon = location.pathname === '/images' || location.pathname === '/favourites';

    return (
        <Card sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
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
            <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
                {showFavoriteIcon && (
                    <FavoriteIconButton
                        isFavourite={image.isFavourite}
                        onToggleFavourite={onToggleFavourite}
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
