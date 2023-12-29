import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from "../layout/Header";
import {useNavigate} from "react-router-dom";
import {InputAdornment} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useState} from "react";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import BottomNav from "../layout/BottomNav";

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setUserPassword(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!userName || !userEmail || !userPassword) {
            showErrorToastMessage("Please complete all form fields!");
            return;
        }

        axios.post(`http://localhost:8080/api/v1/auth/signup`, {
            userName: userName,
            userEmail: userEmail,
            userPassword: userPassword
        })
            .then(response => {
                console.log('Response:', response);
                console.log('Status: ' + response.status);
                // Reset form fields
                setUserName('');
                setUserEmail('');
                setUserPassword('');

                if (response.status === 201) {
                    console.log('User registered successfully!');
                    showSuccessToastMessage();
                    // Navidate to '/signin' after displaying toast
                    setTimeout(() => {
                        navigate('/signin');
                    }, 5000); // 5000 ms it is time of toast displaying
                } else {
                    console.log('Registration failed.');
                }
            })
            .catch(error => {
                console.error('Data sending error:', error);
                showErrorToastMessage('Data sending error:' + error);
            });
    }

    // TOSTIFY
    const showSuccessToastMessage = () => {
        toast.success("User successfully registered!\nRedirecting to Sign In...", {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    const showErrorToastMessage = (message) => {
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    return (
        <>
            <Header/>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: '#EA9215'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="userName"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    autoFocus
                                    value={userName}
                                    onChange={handleNameChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="userEmail"
                                    autoComplete="email"
                                    value={userEmail}
                                    onChange={handleEmailChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="password"
                                    autoComplete="new-password"
                                    name="userPassword"
                                    label="Password"
                                    value={userPassword}
                                    onChange={handlePasswordChange}
                                    type={showPassword ? "text" : "password"}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                >
                                                    {showPassword ? <Visibility/> : <VisibilityOff/>}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            {/*<Grid item xs={12}>*/}
                            {/*    <FormControlLabel*/}
                            {/*        control={<Checkbox value="allowExtraEmails" color="primary" />}*/}
                            {/*        label="I want to receive inspiration, marketing promotions and updates via email."*/}
                            {/*    />*/}
                            {/*</Grid>*/}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2" onClick={() => navigate('/signin')}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
            <BottomNav/>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer/>
        </>
    );
};

export default SignUp;