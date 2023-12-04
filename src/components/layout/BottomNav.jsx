import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {useNavigate} from 'react-router-dom';

const BottomNav = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="fixed" sx={{top: 'auto', bottom: 0}}>
            <Toolbar sx={{justifyContent: 'center', background: '#3A4750'}}>
                <div style={{padding: '0 1.5%'}}>
                    <Fab sx={{
                        background: "#303841",
                        color: "#EA9215", // Orange color for not active state
                        '&:hover': {
                            background: "#EA9215",
                            color: "#303841", // Orange color for hover
                        },
                    }} color="primary" aria-label="home" onClick={() => navigate('/')}>
                        <HomeOutlinedIcon />
                    </Fab>
                </div>
                <div style={{padding: '0 1.5%'}}>
                    <Fab  sx={{
                        background: "#EA9215", // Kolor tła Fab (pomarańczowy)
                        color: "#303841",      // Kolor ikony (szary)
                        '&:hover': {
                            background: "#303841", // Kolor tła Fab na hover (szary)
                            color: "#EA9215",      // Kolor ikony na hover (pomarańczowy)
                        },
                    }} aria-label="like"
                         onClick={() => navigate(sessionStorage.getItem("jwt") ? '/favourites' : '/signin')}>
                        <FavoriteBorderIcon sx={{color: '#EEEEEE'}}/>
                    </Fab>
                </div>
                <div style={{padding: '0 1.5%'}}>
                    <Fab sx={{
                        background: "#303841",
                        color: "#EA9215",
                        '&:hover': {
                            background: "#EA9215",
                            color: "#303841",
                        },
                    }} color="primary" aria-label="add"
                         onClick={() => navigate(sessionStorage.getItem("jwt") ? '/add' : '/signin')}>
                        <AddIcon />
                    </Fab>
                </div>
                <div style={{padding: '0 1.5%'}}>
                    <Fab sx={{
                        background: "#303841",
                        color: "#EA9215",
                        '&:hover': {
                            background: "#EA9215",
                            color: "#303841",
                        },
                    }} color="primary" aria-label="profile"
                         onClick={() => navigate(sessionStorage.getItem("jwt") ? '/profile' : '/signin')}>
                        <PersonOutlineIcon />
                    </Fab>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default BottomNav;
