import React from 'react';
import Fab from "@mui/material/Fab";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const FavoriteIconButton = ({isFavourite, onToggleFavourite, image, loggedUserId}) => (
    <Fab
        color={(loggedUserId === null) ? "default" : (isFavourite ? "red" : "default")}
        aria-label={isFavourite ? "remove from favorites" : "add to favorites"}
        onClick={() => onToggleFavourite(image)}
        sx={{
            color: 'white',
            bgcolor: (loggedUserId === null) ? 'grey' : (isFavourite ? '#EA9215' : 'grey'),
            '&:hover': {
                bgcolor: (loggedUserId === null) ? 'grey' : (isFavourite ? '#EA9215' : 'grey'),
            },
            boxShadow: 'none',
        }}
    >
        <FavoriteBorderIcon/>
    </Fab>
);

export default FavoriteIconButton;
