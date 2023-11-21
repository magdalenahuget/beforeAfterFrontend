import React from 'react';
import {useLocation} from 'react-router-dom';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import useFavourites from '../../hooks/useFavourites';
import Fab from "@mui/material/Fab";

// const FavoriteIconButton = ({isFavourite, onToggleFavourite, image}) => (
//     <IconButton
//         aria-label={isFavourite ? "remove from favorites" : "add to favorites"}
//         onClick={() => onToggleFavourite(image)}
//     >
//         {isFavourite ?
//             <FavoriteIcon sx={{color: 'purple', fontSize: '1.3em'}}/> :
//             <FavoriteBorderIcon sx={{color: 'purple', fontSize: '1.3em'}}/>}
//     </IconButton>
// );

const FavoriteIconButton = ({ isFavourite, onToggleFavourite, image }) => (
    <Fab
        color={isFavourite ? "secondary" : "default"}
        aria-label={isFavourite ? "remove from favorites" : "add to favorites"}
        onClick={() => onToggleFavourite(image)}
        sx={{
            color: 'white',
            bgcolor: isFavourite ? 'purple' : 'grey',
            '&:hover': {
                bgcolor: isFavourite ? 'purple' : 'grey',
            },
            boxShadow: 'none',
        }}
    >
        <FavoriteBorderIcon />
    </Fab>
);


const DeleteIconButton = ({onDeleteImage, image}) => (
    <IconButton
        aria-label="delete image"
        onClick={() => onDeleteImage(image.id)}
    >
        <DeleteIcon sx={{color: 'purple', fontSize: '1.2em'}}/>
    </IconButton>
);

const ImageCard = ({image, onDeleteImage}) => {

    const userId = 1;   //  [TEST USER]  ==> to delete
    const {handleToggleFavourite, favourites} = useFavourites(userId);
    const isFavourite = favourites.some(fav => fav.id === image.id);
    const location = useLocation();


    const showFavoriteIcon = location.pathname === '/home' || location.pathname === '/offer';
    const showDeleteIcon = location.pathname === '/images' || location.pathname === '/favourites';

    return (
        <Card sx={{position: 'relative', height: '100%', display: 'flex', flexDirection: 'column'}}>
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
