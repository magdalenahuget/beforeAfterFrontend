import React from 'react';
import UseAboutMe from '../../hooks/useAboutMe';
import {Box, Typography, CircularProgress} from '@mui/material';

const AboutMeComponent = ({userId}) => {
    const {aboutMeInfo, isLoading, error} = UseAboutMe(userId);

    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center">
                <CircularProgress/>
            </Box>
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
        <Box>
            <Typography variant="body1" textAlign="justify">
                {aboutMeInfo}
            </Typography>
        </Box>
    );
};

export default AboutMeComponent;
