import {Button, Container, Grid, Paper, TextField, Typography} from "@mui/material";

const ContactDetailsForm = ({
                                aboutMe,
                                updateAboutMe,
                                handleFormAboutMeChange,
                                handleSubmitAboutMeForm,
                            }) => {

    const calculateRows = () => {
        const screenHeight = window.innerHeight;
        const row = Math.floor((screenHeight * 0.9) / 40);
        console.log(row);
        return row
    };

    return (
        <Container>
            <Paper elevation={3} style={{padding: 20, marginTop: 20}}
                   sx={{background: '#EEEEEE', width: '500px'}}>
                <Typography variant="h5" align="center" gutterBottom>
                    About Me
                </Typography>
                <div>
                    <form onSubmit={handleSubmitAboutMeForm}>
                        <Grid container spacing={2} alignItems="flex-start">
                            <Grid item xs={120}>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={calculateRows()}
                                    label="About me"
                                    name="aboutme"
                                    value={aboutMe.aboutMe || updateAboutMe.aboutMe}
                                    onChange={handleFormAboutMeChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary"
                                        sx={{
                                            background: '#303841',
                                            color: "#EA9215",
                                            '&:hover': {
                                                background: "#EA9215",
                                                color: "#303841"
                                            },
                                        }}>SAVE
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Paper>
        </Container>
    );
};

export default ContactDetailsForm;