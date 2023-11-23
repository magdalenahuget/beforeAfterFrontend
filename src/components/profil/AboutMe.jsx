import React from 'react';
import UseAboutMe from '../../hooks/useAboutMe';
import {Typography, CircularProgress} from '@mui/material';
import Scrollable from "../layout/Scrollbar";

const AboutMeComponent = ({userId}) => {
    const {aboutMeInfo, isLoading, error} = UseAboutMe(userId);

    if (isLoading) {
        return (
            <Scrollable>
                <CircularProgress/>
            </Scrollable>
        );
    }

    if (error) {
        return (
            <Typography color="error" textAlign="center">
                Error loading the about me information.
            </Typography>
        );
    }

    return (
        <Scrollable>
            <Typography variant="body1" textAlign="justify" sx={{fontSize: '0.875rem'}}>
                {aboutMeInfo}
            </Typography>
        </Scrollable>
    );
};

export default AboutMeComponent;
