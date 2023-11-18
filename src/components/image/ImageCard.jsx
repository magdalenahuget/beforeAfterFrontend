import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';

const ImageCard = ({ image, onToggleFavourite, onDeleteImage  }) => {
    // return (
    //     <Card sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
    //         <CardMedia
    //             component="img"
    //             image={image.url}
    //             alt={`Image ${image.id}`}
    //             sx={{
    //                 width: '100%',
    //                 height: '100%',
    //                 objectFit: 'cover'
    //             }}
    //         />
    //         <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
    //             <IconButton
    //                 aria-label={image.isFavourite ? "remove from favorites" : "add to favorites"}
    //                 onClick={() => onToggleFavourite(image)}
    //             >
    //                 {image.isFavourite ? (
    //                     <FavoriteIcon sx={{ color: 'red' }} />
    //                 ) : (
    //                     <FavoriteBorderIcon sx={{ color: 'red' }} />
    //                 )}
    //             </IconButton>
    //         </Box>
    //     </Card>
    // );
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
                <IconButton
                    aria-label={image.isFavourite ? "remove from favorites" : "add to favorites"}
                    onClick={() => onToggleFavourite(image)}
                >
                    {image.isFavourite ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon sx={{ color: 'red' }} />}
                </IconButton>
                {/* Add a delete icon button */}
                <IconButton
                    aria-label="delete image"
                    onClick={() => onDeleteImage(image.id)} // Call the deleteImage function when clicked
                >
                    <DeleteIcon sx={{ color: 'red' }} />
                </IconButton>
            </Box>
        </Card>
    );
}

export default ImageCard;