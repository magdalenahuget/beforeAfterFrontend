import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Typography from '@mui/material/Typography';

const Header = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="fixed">
            <Toolbar>
                <CameraIcon sx={{ mr: 2 }} onClick={() => navigate('/')} />
                <Typography onClick={() => navigate('/')} variant="h6" color="inherit" noWrap>
                    Before And After
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
