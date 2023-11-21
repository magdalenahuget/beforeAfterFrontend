import React, { useState } from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import classes from '../../index.css';

const AboutMeForm = ({ aboutMe, updateAboutMe, handleAboutMeChange, handleSubmitAboutMe }) => {
    const calculateRows = () => {
        const screenHeight = window.innerHeight;
        return Math.floor((screenHeight * 0.8) / 28);
    };

    const styles = (theme) => ({
        notchedOutline: {
            borderWidth: '1px',
            borderColor: 'yellow !important',
        },
    });

    const [hasChanges, setHasChanges] = useState(false);

    const handleInputChange = (event) => {
        handleAboutMeChange(event);
        setHasChanges(true);
    };

    const handleFormSubmit = (event) => {
        handleSubmitAboutMe(event);
        setHasChanges(false);
    };

    const handleCancel = () => {
        window.location.reload();
        setHasChanges(false);
    };

    return (
        <div>
            <Box sx={{ mt: 2 }}>
                <form onSubmit={handleFormSubmit}>
                    {hasChanges && (
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Button
                                type="button"
                                variant="contained"
                                onClick={handleCancel}
                                sx={{ backgroundColor: 'red' }}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={!hasChanges}
                                sx={{ backgroundColor: 'black' }}
                            >
                                Save
                            </Button>
                        </Grid>
                    )}
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                multiline
                                rows={calculateRows()}
                                fullWidth
                                label="About Us"
                                name="description"
                                value={updateAboutMe.aboutMe}
                                onChange={handleInputChange}
                                sx={{ mt: 1.5 }}
                            />
                        </Grid>
                    </Grid>


                </form>
            </Box>
        </div>
    );
};

export default AboutMeForm;
