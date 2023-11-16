import React, {useEffect, useState} from 'react';
import {TextField, Button, Container, Grid, Paper, Typography} from '@mui/material';
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import a11yProps from "../offer/tabs/a11yProps";
import TabPanel from "../offer/tabs/TabPanel";
import AboutMe from "../user/AboutMe";
import {contactDetailsApi} from "../../api/contactDetailsApi";
import BottomNav from "../layout/BottomNav";
import Header from "../layout/Header";


const Profile = ({userId}) => {
    const [formData, setFormData] = useState({
        streetName: '',
        streetNumber: '',
        apartNumber: '',
        postcode: '',
        phoneNumber: '',
        webpage: '',
        cityName: '',
    })

    const [contactDetails, setContactDetails] = useState([])
    const [value, setValue] = useState(0);

    useEffect(() => {
        contactDetailsApi.getContactDetailsByUserId(userId)
            .then(response => setContactDetails(response.data))
    }, [userId]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChange2 = (event) => {
        const {name, value} = event.target;
        const modifiedValue = name === 'phoneNumber' ? value.replace(/\D/g, '').slice(0, 9) : value;
        setFormData({...formData, [name]: modifiedValue});


        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: modifiedValue,
        }));

        if (name === 'streetName') {
            setContactDetails((prevContactDetails) => ({
                ...prevContactDetails,
                streetName: modifiedValue,
            }));
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here, e.g., sending data to the server
        const phoneNumberWithCountryCode = `+48${formData.phoneNumber}`;
        // Now you can use phoneNumberWithCountryCode in your submission logic
        console.log(contactDetails)
    };

    const isPostcodeValid = () => {
        const postcodePattern = /^\d{2}-\d{3}$/;
        return postcodePattern.test(formData.postcode);
    };

    const isPhoneNumberValid = () => {
        const phoneNumberPattern = /^\d{9}$/;
        return phoneNumberPattern.test(formData.phoneNumber) && !formData.phoneNumber.startsWith('+48');
    };
    const isContactTab = value === 2

    console.log(contactDetails.postcode)

    return (
        <>
            <Header/>
            <Box sx={{width: '100%', mt: '4vh', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '50px -0px'}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Service" {...a11yProps(0)} />
                        <Tab label="About us" {...a11yProps(1)} />
                        <Tab label="Contact" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                {/*<TabPanel value={value} index={0} sx={{textAlign: 'justify'}}>*/}
                {/*    <ImageDescription imageId={imageId} />*/}
                {/*</TabPanel>*/}
                <TabPanel value={value} index={1}>
                    <AboutMe userId={userId}/>
                </TabPanel>
                {isContactTab && (
                    <TabPanel value={value} index={2}>
                        <Container>
                            <Paper elevation={3} style={{padding: 20, marginTop: 20}}>
                                <Typography variant="h5" align="center" gutterBottom>
                                    Contact Details Form
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={2}>
                                        {/* Address Section */}
                                        <Grid item xs={12}>
                                            <Typography variant="h6" gutterBottom>
                                                Address Details
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Street Name"
                                                name="streetName"
                                                value={contactDetails.streetName || formData.streetName}
                                                onChange={handleChange2}
                                                inputProps={{readOnly: false}}

                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label="Street Number"
                                                name="streetNumber"
                                                value={formData.streetNumber}
                                                onChange={handleChange2}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label="Apartment Number"
                                                name="apartNumber"
                                                value={formData.apartNumber}
                                                onChange={handleChange2}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label="Postcode"
                                                name="postcode"
                                                value={formData.postcode}
                                                onChange={handleChange2}
                                                error={!isPostcodeValid()}
                                                helperText={!isPostcodeValid() && "Enter a valid postcode (format: 00-000)"}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label="City Name"
                                                name="cityName"
                                                value={formData.cityName}
                                                onChange={handleChange2}
                                            />
                                        </Grid>

                                        {/* Contact Section */}
                                        <Grid item xs={12}>
                                            <Typography variant="h6" gutterBottom>
                                                Contact Information
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label="Phone Number"
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={handleChange2}
                                                error={isPhoneNumberValid()}
                                                helperText={isPhoneNumberValid() && "Enter a valid phone number (without +48)"}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label="Webpage"
                                                name="webpage"
                                                value={formData.webpage}
                                                onChange={handleChange2}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button type="submit" variant="contained" color="primary">
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </Container>
                    </TabPanel>
                )}
            </Box>
            <BottomNav/>
        </>

    );
};

export default Profile;
