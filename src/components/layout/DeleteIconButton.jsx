import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const DeleteIconButton = ({onDeleteImage, image}) => (
    <Fab
        aria-label="delete image"
        onClick={() => onDeleteImage(image.id)}
        sx={{
            color: 'white',
            bgcolor: 'grey',
            '&:hover': {
                bgcolor: 'grey',
            },
            boxShadow: 'none',
            marginLeft: '8px',
        }}
    >
        <DeleteIcon/>
    </Fab>
);

export default DeleteIconButton;

// const DeleteIconButton = ({onDeleteImage, image}) => (
//     <IconButton
//         aria-label="delete image"
//         onClick={() => onDeleteImage(image.id)}
//     >
//         <DeleteIcon sx={{color: 'purple', fontSize: '1.2em'}}/>
//     </IconButton>
// );

