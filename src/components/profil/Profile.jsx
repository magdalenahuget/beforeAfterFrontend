import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import TabPanel from "../offer/tabs/TabPanel";
import {contactDetailsApi} from "../../api/contactDetailsApi";
import BottomNav from "../layout/BottomNav";
import Header from "../layout/Header";
import ContactDetailsForm from "./ContactDetailsForm";
import ProfileTabs from "./ProfileTabs";

import AboutMeForm from "./AboutMeForm";
import {userDataApi} from "../../api/userApi";

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
    const [updateAboutMe, setUpdateAboutMe] = useState("")
    const [contactDetails, setContactDetails] = useState([])
    const [aboutMe, setAboutMe] = useState('')
    const [value, setValue] = useState(0);

    useEffect(() => {

        contactDetailsApi.getContactDetailsByUserId(userId)
            .then(response => {
                setContactDetails(response.data);

            }).catch(error => {
            contactDetailsApi.createContactDetails(contactDetails)
        })

    }, [userId]);

    useEffect(() => {

        userDataApi.getAboutMeByUserId(userId)
            .then(response => setAboutMe(response.data))
    }, [userId]);


    const handleTabChange = (event, newValue) => {


        setValue(newValue);
        if (newValue === 1) {
            setUpdateAboutMe({
                aboutMe: aboutMe.aboutMe,
            });
        }
    };

    const handleFormInputChange = (event) => {

        const {name, value} = event.target;
        const modifiedValue = name === 'phoneNumber' ? value.replace(/\D/g, '').slice(0, 9) : value;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: modifiedValue,
        }));

        setContactDetails((prevContactDetails) => ({
            ...prevContactDetails,
            [name]: modifiedValue,
        }));
    };

    const handleAboutMeChange = (event) => {

        const {value} = event.target;
        setUpdateAboutMe((prevUpdateAboutMe) => ({
            ...prevUpdateAboutMe,
            aboutMe: value,
        }));

        setAboutMe((prevAboutMe) => ({
            ...prevAboutMe,
            aboutMe: updateAboutMe.aboutMe || aboutMe.aboutMe,
        }));
    };
    const handleSubmitForm = (event) => {

        contactDetailsApi.updateContactDetailsByUserId(userId, contactDetails)
        event.preventDefault();

    };
    const handleSubmitAboutMe = (event) => {

        userDataApi.updateAboutMeByUserId(userId, aboutMe)
        event.preventDefault();
    };

    const isPostcodeValid = () => {

        const postcodePattern = /^\d{2}-\d{3}$/;
        return postcodePattern.test(formData.postcode);
    };


    return (
        <>
            <Header/>
            <Box sx={{
                width: '100%',
                mt: '4vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '50px -0px'
            }}>
                <ProfileTabs value={value} handleTabChange={handleTabChange}/>
                {value === 1 && (
                    <TabPanel value={value} index={1}>
                        <AboutMeForm
                            aboutMe={aboutMe}
                            updateAboutMe={updateAboutMe}
                            handleAboutMeChange={handleAboutMeChange}
                            handleSubmitAboutMe={handleSubmitAboutMe}
                        />
                    </TabPanel>
                )}
                {value === 2 && (
                    <TabPanel value={value} index={2}>
                        <ContactDetailsForm
                            formData={formData}
                            isPostcodeValid={isPostcodeValid}
                            handleFormInputChange={handleFormInputChange}
                            handleSubmitForm={handleSubmitForm}
                            contactDetails={contactDetails}
                        />
                    </TabPanel>
                )}
            </Box>
            <BottomNav/>
        </>

    );
};

export default Profile;
