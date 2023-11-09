import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

const HomeIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </SvgIcon>
);

const BottomNav = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
                <HomeIcon fontSize="large" onClick={() => navigate('/home')}/>
                <FavoriteBorderIcon fontSize="large" onClick={() => navigate('/favourites')}/>
                <AddIcon fontSize="large" onClick={() => navigate('/add')}/>
                <PersonIcon fontSize="large" onClick={() => navigate('/profile')}/>
            </Toolbar>
        </AppBar>
    );
};

export default BottomNav;
