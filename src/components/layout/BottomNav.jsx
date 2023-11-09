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
            <Toolbar sx={{ justifyContent: 'center' }}>
                <div style={{ padding: '0 1.5%' }}><HomeIcon fontSize="large" onClick={() => navigate('/home')}/></div>
                <div style={{ padding: '0 1.5%' }}><FavoriteBorderIcon fontSize="large" onClick={() => navigate('/favourites')}/></div>
                <div style={{ padding: '0 1.5%' }}><AddIcon fontSize="large" onClick={() => navigate('/add')}/></div>
                <div style={{ padding: '0 1.5%' }}><PersonIcon fontSize="large" onClick={() => navigate('/profile')}/></div>
            </Toolbar>
        </AppBar>
    );
};

export default BottomNav;
