import React from 'react';
import { Box } from '@mui/material';

//Dopasować responsywnie Scrollbar do widoku zdjecia
const Scrollable = ({ children }) => {
    return (
        <Box
            sx={{
                maxHeight: '450px',
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
            {children}
        </Box>
    );
};

export default Scrollable;
