import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {styled} from "@mui/material/styles";
import TextField from '@mui/material/TextField';

const AvatarForm = ({user, updateUser, handleSubmitUserForm, handleUserChange}) => {
    const [hasChanges, setHasChanges] = useState(false);

    const handleInputChange = (event) => {
        handleUserChange(event);
        setHasChanges(true);
    };

    const handleFormSubmit = (event) => {
        handleSubmitUserForm(event);
        setHasChanges(false);
    };

    const handleCancel = () => {
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


    return (
        <div>
            <form onSubmit={handleFormSubmit}>
            <Grid container spacing={2}>
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
                            src="https://source.unsplash.com/random?company"
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
                            <VisuallyHiddenInput type="file"/>
                            +
                        </Button>
                    </Box>
                </Grid>

                <Grid item>
                    <Box
                        sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative'}}>
                        <TextField
                            variant="outlined"
                            multiline
                            rows='3'
                            fullWidth
                            label="My Name"
                            name="your name"
                            value={updateUser.userName}
                            onChange={handleInputChange}
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
                        onClick={handleCancel}
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
                        onClick={handleFormSubmit}
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
        </div>
    );
}

export default AvatarForm;
