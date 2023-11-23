import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";
import {getUserIdFromToken} from "../../utils/jwtUtils";
import useUser from "../../hooks/useUser";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";

const Header = () => {
    const navigate = useNavigate();
    const [isUserLogged, setIsUserLogged] = useState(false);
    const userId = getUserIdFromToken();
    const {userName} = useUser(userId);

    useEffect(() => {
        console.log("Jwt: " + sessionStorage.getItem("jwt"));
        if (sessionStorage.getItem("jwt")) {
            setIsUserLogged(true);
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
            <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
                <CameraIcon sx={{mr: 2}}/>
                <Typography variant="h6" color="inherit" noWrap>
                    Before And After
                </Typography>
                {isUserLogged && (
                    <>
                        <Box sx={{ marginLeft: 'auto', marginRight: 1 }}>
                            <Typography>
                                Hello, {userName}
                            </Typography>
                        </Box>
                        <Fab color="primary" aria-label="home" onClick={handleLogout}>
                            <LogoutIcon onClick={handleLogout}/>
                        </Fab>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;