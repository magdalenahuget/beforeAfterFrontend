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
            <Typography
                variant="body1"
                textAlign="justify"
                sx={{
                    fontSize: '0.875rem',
                    maxHeight: '400px',
                    overflow: 'auto',
                    paddingRight: '3%',
                    '&::-webkit-scrollbar': {
                        width: '12px',
                    },
                    '&::-webkit-scrollbar-track': {
                        boxShadow: 'inset 0 0 5px grey',
                        borderRadius: '10px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: 'linear-gradient(45deg, #606dbc, #3f4c6b)',
                        borderRadius: '10px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: 'linear-gradient(45deg, #555, #333)',
                    },
                    scrollbarWidth: 'thin',
                    scrollbarColor: 'rgba(96, 108, 188) #f1f1f1'
                }}
            >
                {aboutMeInfo}
            </Typography>
        </Box>
    );
};

export default AboutMeComponent;
