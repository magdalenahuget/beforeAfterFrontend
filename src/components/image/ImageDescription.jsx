import React from 'react';
import {Typography} from '@mui/material';
import Scrollable from "../layout/Scrollbar";

const ImageDescription = ({description}) => {
    return (
        <Scrollable>
            <Typography variant="body1" textAlign="justify" component="div">
                {description}
            </Typography>
        </Scrollable>
    );
};

export default ImageDescription;