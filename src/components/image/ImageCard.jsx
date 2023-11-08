import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Box from '@mui/material/Box';

const ImageCard = ({ imageId, showIcon }) => {
    const imageUrl = `https://source.unsplash.com/random?wallpapers&sig=${imageId}`;

    return (
        <Card sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                image={imageUrl}
                alt={`Random Image ${imageId}`}
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />
            {showIcon && (
                <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
                    <IconButton aria-label="add to favorites">
                        <FavoriteBorderIcon />
                    </IconButton>
                </Box>
            )}
        </Card>
    );
}

export default ImageCard;
