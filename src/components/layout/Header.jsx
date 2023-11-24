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
import {Avatar} from "@mui/material";
import logo from "../../images/before-4_preview_rev_1.png"
import {Image} from "@mui/icons-material";

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


    const handleHelloClick = () => {
        if (isUserLogged) {
            handleLogout();
        }
    };

    return (
        <AppBar position="fixed">
            {!isUserLogged && (
                <Toolbar sx={{display: 'flex', alignItems: 'center', height: 20, background: '#3A4750'}}>
                    <Avatar alt={userName} src={logo} sx={{width: 80, height: 80, marginRight: 1}}/>
                    <Typography sx={{color: "#EA9215", fontFamily: 'Poppins, sans-serif', fontWeight: '200'}}
                                variant="h6" noWrap>
                        Before & After
                    </Typography>
                </Toolbar>
            )}
            {isUserLogged && (
                <Toolbar sx={{display: 'flex', alignItems: 'center', height: 20, background: '#3A4750'}}>
                    <Avatar alt={userName} src={logo} sx={{width: 80, height: 80, marginRight: 1}}/>
                    <div onClick={handleHelloClick} style={{cursor: 'pointer'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <Typography sx={{color: "#EA9215", fontFamily: 'Poppins, sans-serif', fontWeight: '200'}}
                                        variant="h6">
                                Hello, {userName}
                            </Typography>
                            <LogoutIcon sx={{marginLeft: 10, color: "#EA9215"}} onClick={handleLogout}/>
                        </div>
                    </div>
                </Toolbar>
            )}
        </AppBar>
    );
};

export default Header;