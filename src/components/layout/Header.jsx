import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import Fab from "@mui/material/Fab";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const [isUserLogged, setIsUserLogged] = useState(false);

    useEffect(() => {
        console.log("Jwt: " + sessionStorage.getItem("jwt"));
        if (sessionStorage.getItem("jwt")) {
            setIsUserLogged(true);
            //TODO: why in this console log is false???
            console.log("Is user logged: " + isUserLogged);
        } else {
            console.log("Is user logged: " + isUserLogged);
            setIsUserLogged(false);
        }

    }, [sessionStorage.getItem("jwt")]);

    const handleLogout = () => {
        sessionStorage.removeItem("jwt");
        console.log('User has been successfully logged out.')
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
                        <LogoutIcon onClick={handleLogout}/>
                    </Fab>
                )}
            </Toolbar>
        </AppBar>);
};

export default Header;