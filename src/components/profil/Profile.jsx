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
import {toast, ToastContainer} from "react-toastify";
import AvatarForm from "./AvatarForm";
import axios from "axios";
import {getUserIdFromToken} from '../../utils/jwtUtils';
import {imagesApi} from "../../api/imagesApi";
import ImagesList from "../image/ImagesList";
import useImageData from "../../hooks/useImageData";
import {Grid} from "@mui/material";
import AboutMeFormII from "./AboutMeForm";

const Profile = () => {

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
        const [user, setUser] = useState([])
        const [updateUser, setUpdateUser] = useState([])
        const [newAvatar, setNewAvatar] = useState(null)
        const [images, setImages] = useState([])
        const userId = getUserIdFromToken();
        const {userImages} = useImageData(userId);


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

        useEffect(() => {
            userDataApi.getUserById(userId)
                .then(response => setUser(response.data))
        }, [userId]);


        const handleTabChange = (event, newValue) => {
            setValue(newValue);
            if (newValue === 1) {
                console.log(aboutMe)
                console.log(user)
                setUpdateAboutMe({
                    aboutMe: aboutMe.aboutMe,
                });
                setUpdateUser({
                    userName: user.userName,
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

        const handleFormAboutMeChange = (event) => {

            const {value} = event.target;
            console.log(value)
            setUpdateAboutMe((prevUpdateAboutMe) => ({
                ...prevUpdateAboutMe,
                aboutMe: value,

            }));

            setAboutMe((prevAboutMe) => ({
                ...prevAboutMe,
                aboutMe: value,
            }));
        };

        const handleUserChange = (event) => {
            const {value} = event.target;

            setUpdateUser((preUpdateUser) => ({
                ...preUpdateUser,
                userName: value,
            }));

            setUser((preUser) => ({
                ...preUser,
                userName: updateUser.userName || user.userName
            }))

        }

        const handleAvatarChange = (event) => {
            const file = event.target.files[0];
            setNewAvatar(file);
        };

        const handleSubmitAvatar = (event) => {


            const dataToSend = new FormData();
            dataToSend.append('file', newAvatar);
            dataToSend.append('userId', userId);


            axios.post(`http://localhost:8080/api/v1/users`, dataToSend)
                .then((response) => {
                    console.log('Response', response);
                }).catch(error => console.error(error))

            event.preventDefault();
        }


        const handleSubmitForm = (event) => {

            contactDetailsApi.updateContactDetailsByUserId(userId, contactDetails)
                .then((response) => {
                    if (response.status === 200) {
                        showSuccessToastMessage()
                    }
                })
            event.preventDefault();

        };
        const handleSubmitAboutMeForm = (event) => {
            userDataApi.updateAboutMeByUserId(userId,aboutMe)
                .then((response) => {
                    if (response.status === 200) {
                        showSuccessToastMessage()
                    }
                })
            event.preventDefault();
        };

        const handleSubmitUserForm = (event) => {
            userDataApi.updateUserById(userId, updateUser)
                .then((response) => {
                    if (response.status === 200) {
                        showSuccessToastMessage();
                    }
                })
                .catch((error) => {
                    console.error(error.response.data);
                });
            event.preventDefault();
        };

        const isPostcodeValid = () => {
            const postcodePattern = /^\d{2}-\d{3}$/;
            return postcodePattern.test(formData.postcode);
        };

        const showSuccessToastMessage = () => {
            toast.success("Your information has been added successfully!", {
                position: toast.POSITION.TOP_RIGHT
            });
        };

        return (
            <>
                <Grid container justifyContent="center" alignItems="center">
                    <Header/>
                    <Grid>
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            paddingTop: '5em'
                        }}>
                            <ProfileTabs value={value} handleTabChange={handleTabChange}/>
                            {value === 0 && (
                                <TabPanel value={value} index={0}>
                                    <ImagesList
                                        images={userImages}
                                    />
                                </TabPanel>
                            )}
                            {value === 1 && (
                                <TabPanel value={value} index={1}>
                                    <AvatarForm
                                        user={user}
                                        updateUser={updateUser}
                                        handleUserChange={handleUserChange}
                                        handleSubmitUserForm={handleSubmitUserForm}
                                        handleAvatarChange={handleAvatarChange}
                                        handleSubmitAvatar={handleSubmitAvatar}
                                    />
                                    <AboutMeForm
                                        aboutMe={aboutMe}
                                        updateAboutMe={updateAboutMe}
                                        handleFormAboutMeChange={handleFormAboutMeChange}
                                        handleSubmitAboutMeForm={handleSubmitAboutMeForm}
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
                    </Grid>
                    <BottomNav/>
                    <ToastContainer
                        position="top-right"
                        autoClose={100}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    <ToastContainer/>
                </Grid>
            </>

        );
    }
;

export default Profile;
