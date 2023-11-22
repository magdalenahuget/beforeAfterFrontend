import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {styled} from "@mui/material/styles";
import TextField from '@mui/material/TextField';

const AvatarForm = ({
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

    const renderUserAvatar = () => {
        if (user.avatar) {
            return `data:image/jpeg;base64,${user.avatar}`;
        } else {
            return "https://source.unsplash.com/random?company";
        }
    };


    return (
        <div>
            <form>
                <Grid item>
                    <Box sx={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        mt: 0,
                        mb: 0,
                        marginLeft: '-20px', // Adjusted margin-left
                    }}>
                        <Avatar
                            alt="Logo Firmy"
                            src={renderUserAvatar()}
                            sx={{
                                width: 70,
                                height: 70,
                                border: '4px solid black',
                                marginBottom: 0,
                            }}
                        />
                        <Button component="label"
                                sx={{
                                    padding: 0,
                                    minWidth: 'auto',
                                    borderRadius: '50%',
                                    backgroundColor: 'black',
                                    color: 'white',
                                    width: '40px',
                                    height: '40px',
                                    border: '5px solid white',
                                    fontSize: '1.5em',
                                    marginLeft: '-30px',
                                    marginTop: '55px',
                                    '&:hover': {
                                        backgroundColor: 'red',
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
            </form>

            <form onSubmit={handleFormSubmitName}>
                <Grid container spacing={2}>

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
                                multiline
                                rows='3'
                                fullWidth
                                label="My Name"
                                name="your name"
                                value={updateUser.userName}
                                onChange={handleInputChangeName}
                            />
                        </Box>
                    </Grid>
                </Grid>
                {hasChanges && (
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        marginTop: '10px', // Adjusted marginTop
                    }}>
                        <Button
                            type="button"
                            variant="outlined"
                            onClick={handleCancelName}
                            sx={{
                                marginRight: '15px', // Add margin between buttons
                                backgroundColor: 'red', // Set background color to black
                                color: 'white', // Set color to black
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            onClick={handleFormSubmitName}
                            disabled={!hasChanges}
                            variant="contained"
                            sx={{
                                backgroundColor: 'black', // Set background color to black
                                color: 'white', // Set text color to white
                            }}
                        >
                            Save
                        </Button>
                    </Box>
                )}
            </form>
            <Button
                type="button"
                onClick={handleAvatarSubmit}
                sx={{
                    backgroundColor: 'black',
                    color: 'white',
                }}
            >
                Save Avatar
            </Button>
        </div>
    );
}


export default AvatarForm;
