import React from 'react';
import Fab from "@mui/material/Fab";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const FavoriteIconButton = ({isFavourite, onToggleFavourite, image, loggedUserId}) => (
    <Fab
        color={(loggedUserId === null) ? "default" : (isFavourite ? "secondary" : "default")}
        aria-label={isFavourite ? "remove from favorites" : "add to favorites"}
        onClick={() => onToggleFavourite(image)}
        sx={{
            color: 'white',
            bgcolor: (loggedUserId === null) ? 'grey' : (isFavourite ? 'purple' : 'grey'),
            '&:hover': {
                bgcolor: (loggedUserId === null) ? 'grey' : (isFavourite ? 'purple' : 'grey'),
            },
            boxShadow: 'none',
        }}
    >
        <FavoriteBorderIcon/>
    </Fab>
);

export default FavoriteIconButton;
