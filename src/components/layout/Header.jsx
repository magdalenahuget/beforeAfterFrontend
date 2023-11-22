import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import {getAboutMeByUserId} from "../../api/userApi";
import Fab from "@mui/material/Fab";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const [isUserLogged, setIsUserLogged] = useState(false);

    useEffect(() => {
        console.log(sessionStorage.getItem("jwt"))
        if (sessionStorage.getItem("jwt")) {
            console.log('true if')
            setIsUserLogged(true);
        } else {
            console.log('else')
            console.log(isUserLogged);
            setIsUserLogged(false);
        }

    }, [sessionStorage.getItem("jwt")]);

    const handleLogout = () => {
        console.log('handle logout')
        sessionStorage.removeItem("jwt");
        navigate('/');
    }


    return (
        <AppBar position="fixed">
            <Toolbar>
                <CameraIcon sx={{mr: 2}}/>
                <Typography variant="h6" color="inherit" noWrap>
                    Before And After
                </Typography>
                {isUserLogged && (
                    <Fab color="primary" aria-label="home" onClick={handleLogout} sx={{marginLeft: 'auto'}}>
                        <LogoutIcon onClick={handleLogout}  />
                    </Fab>
                )}
            </Toolbar>
        </AppBar>);
};

export default Header;