import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";
import {getUserIdFromToken} from "../../utils/jwtUtils";
import useUser from "../../hooks/useUser";
import {Avatar, useMediaQuery, useTheme} from "@mui/material";
import logo from "../../images/before-4_preview_rev_1.png"

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

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <AppBar position="fixed">
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: 20,
                    background: '#3A4750',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar alt={userName} src={logo} sx={{ width: 80, height: 80, marginRight: 1 }} />
                            <Typography sx={{ color: '#EA9215', fontFamily: 'Poppins, sans-serif', fontWeight: '200' }} variant="h6" noWrap>
                                Before & After
                            </Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {isLargeScreen && isUserLogged && (
                        <Typography sx={{ color: '#EA9215', fontFamily: 'Poppins, sans-serif', fontWeight: '200' }} variant="h6">
                            Hello, {userName}
                        </Typography>
                    )}
                    <LogoutIcon sx={{ marginLeft: 10, color: '#EA9215', cursor: 'pointer' }} onClick={handleLogout} />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;