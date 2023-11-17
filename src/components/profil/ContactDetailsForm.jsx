import React, {useEffect} from 'react';
import {Button, Container, Grid, Paper, TextField, Typography} from "@mui/material";

const ContactDetailsForm = ({
                                formData,
                                isPostcodeValid,
                                isPhoneNumberValid,
                                handleFormInputChange,
                                handleSubmitForm,
                                contactDetails
                            }) => {

    return (
        <Container>
            <Paper elevation={3} style={{padding: 20, marginTop: 20}}>
                <Typography variant="h5" align="center" gutterBottom>
                    Contact Details Form
                </Typography>
                <div>
                    <form onSubmit={handleSubmitForm}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Street Name"
                                    name="streetName"
                                    value={contactDetails.streetName || formData.streetName}
                                    onChange={handleFormInputChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Street Number"
                                    name="streetNumber"
                                    value={contactDetails.streetNumber || formData.streetNumber}
                                    onChange={handleFormInputChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Apartment Number"
                                    name="apartNumber"
                                    value={contactDetails.apartNumber || formData.apartNumber}
                                    onChange={handleFormInputChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Postcode"
                                    name="postcode"
                                    value={contactDetails.postcode || formData.postcode}
                                    onChange={handleFormInputChange}
                                    error={!isPostcodeValid()}
                                    helperText={!isPostcodeValid() && "Enter a valid postcode (format: 00-000)"}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="City Name"
                                    name="cityName"
                                    value={contactDetails.cityName || formData.cityName}
                                    onChange={handleFormInputChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    name="phoneNumber"
                                    value={contactDetails.phoneNumber || formData.phoneNumber}
                                    onChange={handleFormInputChange}
                                    error={isPhoneNumberValid()}
                                    helperText={isPhoneNumberValid() && "Enter a valid phone number (without +48)"}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Webpage"
                                    name="webpage"
                                    value={contactDetails.webpage || formData.webpage}
                                    onChange={handleFormInputChange}
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
            </Paper>
        </Container>
    );
};

export default ContactDetailsForm;