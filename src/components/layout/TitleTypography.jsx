import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TitleTypography = ({ titleText }) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: '2vh',
            marginBottom: '2rem',
        }}>
            <Typography
                variant="h4"
                component="div"
                gutterBottom
                sx={{
                    fontWeight: 'bold',
                    fontSize: {
                        xs: '1.5rem', // for extra-small devices
                        sm: '2rem',   // for small devices
                        md: '2.5rem', // for medium devices
                        lg: '3rem',   // for large devices
                        xl: '3.5rem'  // for extra-large devices
                    }
                }}
            >
                {titleText}
            </Typography>
        </Box>
    );
}

export default TitleTypography;
