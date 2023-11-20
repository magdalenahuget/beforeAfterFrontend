import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import useFavourites from "../../hooks/useFavourites";

const ImageCard = ({ image, onDeleteImage }) => {
    const location = useLocation();
    const { favourites, addFavourite, removeFavourite, isLoading } = useFavourites(image.userId);
    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            setIsFavourite(favourites.some(fav => fav.id === image.id));
        }
    }, [favourites, image.id, isLoading]);

    const handleToggleFavourite = () => {
        if (isFavourite) {
            removeFavourite(image.id).then(() => setIsFavourite(false));
        } else {
            addFavourite(image.id).then(() => setIsFavourite(true));
        }
    };

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
                    <IconButton
                        aria-label={isFavourite ? 'remove from favorites' : 'add to favorites'}
                        onClick={handleToggleFavourite}
                        disabled={isLoading}
                    >
                        {isFavourite ? <FavoriteIcon sx={{ color: 'purple', fontSize: '1.2em' }} /> :
                            <FavoriteBorderIcon sx={{ color: 'purple', fontSize: '1.2em' }} />}
                    </IconButton>
                )}
                {showDeleteIcon && (
                    <IconButton
                        aria-label="delete image"
                        onClick={() => onDeleteImage(image.id)}
                    >
                        <DeleteIcon sx={{ color: 'purple', fontSize: '1.2em' }} />
                    </IconButton>
                )}
            </Box>
        </Card>
    );
};

export default ImageCard;