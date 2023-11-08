import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const ImageCard = ({ imageId }) => {
    const imageUrl = `https://source.unsplash.com/random?wallpapers&sig=${imageId}`;

    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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
        </Card>
    );
}

export default ImageCard;
