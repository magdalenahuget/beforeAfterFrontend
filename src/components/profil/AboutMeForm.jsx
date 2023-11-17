import React from 'react';
import {Button, Grid, TextField} from "@mui/material";

const AboutMeForm = ({updateAboutMe, handleAboutMeChange, handleSubmitAboutMe}) => {

    const calculateRows = () => {
        const screenHeight = window.innerHeight;
        return Math.floor((screenHeight * 0.8) / 28);
    };
    return (
        <div>
            <form onSubmit={handleSubmitAboutMe}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            multiline
                            rows={calculateRows()}
                            fullWidth
                            label="Description"
                            name="description"
                            value={updateAboutMe.aboutMe}
                            onChange={handleAboutMeChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default AboutMeForm;
