import React from 'react';
import Fab from "@mui/material/Fab";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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

export default FavoriteIconButton;
