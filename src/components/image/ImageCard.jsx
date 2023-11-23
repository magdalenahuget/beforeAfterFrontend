import React from 'react';
import {useLocation} from 'react-router-dom';
import {getUserIdFromToken} from "../../utils/jwtUtils";
import useFavourites from '../../hooks/useFavourites';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import FavoriteIconButton from "../layout/FavoriteIconButton";
import DeleteIconButton from "../layout/DeleteIconButton";


const ImageCard = ({image, onDeleteImage}) => {
    const userId = getUserIdFromToken();
    const {handleToggleFavourite, favourites} = useFavourites(userId);
    const isFavourite = favourites.some(fav => fav.id === image.id);
    const location = useLocation();
    const navigate = useNavigate();


    /**
     * e.stopPropagation();  - Prevents propagation to the parent element
     * { state: { userId: image.userId } } - Passes the `userId` associated with the image as the navigation state
     * @param e
     */
    const goToOffer = (e) => {
        e.stopPropagation();
        navigate(`/offer/${image.id}`, { state: { userId: image.userId } });
    };


    const showFavoriteIcon = location.pathname === '/' || location.pathname === '/offer';
    const showDeleteIcon = location.pathname === '/images' || location.pathname === '/favourites' || location.pathname === '/profile';

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
                onClick={goToOffer}
            />
            <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
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
