import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import TabPanel from "../offer/tabs/TabPanel";
import {contactDetailsApi} from "../../api/contactDetailsApi";
import BottomNav from "../layout/BottomNav";
import Header from "../layout/Header";
import ContactDetailsForm from "./ContactDetailsForm";
import ProfileTabs from "./ProfileTabs";
import {getAboutMeByUserId} from "../../api/userApi";
import AboutMeForm from "./AboutMeForm";

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
            .then(response => setContactDetails(response.data))
    }, [userId]);

    useEffect(() => {

        getAboutMeByUserId(userId)
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
    };
    const handleSubmitForm = (event) => {

        event.preventDefault();
//TODO logika do wysylania
        const phoneNumberWithCountryCode = `+48${formData.phoneNumber}`;

    };
    const handleSubmitAboutMe = (event) => {

        event.preventDefault();
        // TODO: Logika do wysyłania

        setAboutMe((prevAboutMe) => ({
            ...prevAboutMe,
            aboutMe: updateAboutMe.aboutMe || aboutMe.aboutMe,
        }));

    };

    const isPostcodeValid = () => {

        const postcodePattern = /^\d{2}-\d{3}$/;
        return postcodePattern.test(formData.postcode);
    };

    const isPhoneNumberValid = () => {

        const phoneNumberPattern = /^\d{9}$/;
        return phoneNumberPattern.test(formData.phoneNumber) && !formData.phoneNumber.startsWith('+48');
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
                            isPhoneNumberValid={isPhoneNumberValid}
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
