import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {styled} from "@mui/material/styles";
import TextField from '@mui/material/TextField';


const AvatarForm =  ({
                              user,
                              updateUser,
                              handleSubmitUserForm,
                              handleUserChange,
                              handleAvatarChange,
                              handleSubmitAvatar
                          }) => {
    const [hasChanges, setHasChanges] = useState(false);
    const [hasChangesAvatar, setHasChangesAvatar] = useState(false);


    const handleInputChangeName = (event) => {

        handleUserChange(event);
        setHasChanges(true);
    };

    const handleInputChangeAvatar = (event) => {
        handleAvatarChange(event);
        setHasChangesAvatar(true)

    }

    const handleFormSubmitName = (event) => {
        handleSubmitUserForm(event);
        setHasChanges(false);
    };

    const handleAvatarSubmit = (event) => {
        handleSubmitAvatar(event);
        window.location.reload(true);
        setHasChangesAvatar(false)
    }

    const handleCancelName = () => {
        window.location.reload(true);
        setHasChanges(false);
    };


    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(15%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const renderUserAvatar =  () => {

            if (user.avatar) {
                return `data:image/jpeg;base64,${user.avatar}`;
            } else {
                return "https://source.unsplash.com/random?company";
            }
    };


    return (
        <div>

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                <Grid item>
                    <Box sx={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        mt: 0,
                        mb: 0,
                        marginLeft: '30px',
                        flexGrow: 1, // Dodane flex-grow
                    }}>
                        <Avatar
                            alt="Logo"
                            src={renderUserAvatar()}
                            sx={{
                                width: 70,
                                height: 70,
                                marginBottom: 0,
                                border: '2px solid #303841',
                            }}
                        />
                        <Button component="label"
                                sx={{
                                    padding: 0,
                                    minWidth: 'auto',
                                    borderRadius: '50%',
                                    color: 'white',
                                    width: '40px',
                                    height: '40px',
                                    border: '5px solid white',
                                    fontSize: '1.5em',
                                    marginLeft: '-20px', // Adjusted margin-left
                                    marginTop: '55px',
                                    backgroundColor: '#303841',
                                    '&:hover': {
                                        backgroundColor: '#EA9215',
                                    }
                                }}>
                            <VisuallyHiddenInput
                                id="avatar-upload"
                                type="file"
                                onChange={handleInputChangeAvatar}/>
                            +
                        </Button>
                    </Box>
                </Grid>
                <Grid item>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            position: 'relative'
                        }}>
                        <TextField
                            variant="outlined"
                            // multiline
                            rows='3'
                            fullWidth
                            label="My Name"
                            name="your name"
                            value={updateUser.userName}
                            onChange={handleInputChangeName}
                        />
                    </Box>
                </Grid>
            </Box>
            {hasChangesAvatar && (
                <Grid item xs={12}>
                    <Button
                        type="submit" variant="contained" color="primary"
                        onClick={handleAvatarSubmit}
                        sx={{
                            background: '#303841',
                            color: "#EA9215",
                            '&:hover': {
                                background: "#EA9215",
                                color: "#303841"
                            },
                        }}
                    >
                        Save Avatar
                    </Button>
                    <Button
                        type="button"
                        variant="outlined"
                        onClick={handleCancelName}
                        sx={{
                            marginRight: '15px',
                            backgroundColor: 'red',
                            color: '#303841',
                        }}
                    >
                        Cancel
                    </Button>
                </Grid>
            )}
            {hasChanges && (
                <Grid item xs={12}>
                    <Button
                        type="submit" variant="contained" color="primary"
                        onClick={handleFormSubmitName}
                        sx={{
                            background: '#303841',
                            color: "#EA9215",
                            '&:hover': {
                                background: "#EA9215",
                                color: "#303841"
                            },
                        }}
                    >
                        Save Name
                    </Button>
                    <Button
                        type="button"
                        variant="outlined"
                        onClick={handleCancelName}
                        sx={{
                            marginRight: '15px',
                            backgroundColor: 'red',
                            color: '#303841',
                        }}
                    >
                        Cancel
                    </Button>
                </Grid>
            )}
        </div>
    );
}

export default AvatarForm;
