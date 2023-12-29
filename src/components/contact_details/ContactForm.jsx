import React, {useState} from "react";
import {TextField, Button, Typography, Box} from "@mui/material";
import ReCAPTCHA from 'react-google-recaptcha';
import {useSendContactEmail} from '../../hooks/useEmails';
import { ToastContainer, toast } from 'react-toastify';

export default function ContactForm({offerUserId, onCancel}) {
    const [senderName, setSenderName] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [emailContent, setEmailContent] = useState('');
    const [verified, setVerified] = useState(false);
    const {send, isLoading, error} = useSendContactEmail();

    const resetForm = () => {
        setSenderName("");
        setSenderEmail("");
        setEmailContent("");
        setVerified(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!verified) {
            alert('Please verify that you are not a robot.');
            return;
        }

        const contactFormData = {
            offerUserId,
            senderName,
            senderEmail,
            emailContent
        };

        try {
            await send(contactFormData);
            showSuccessToastMessage('Email sent successfully!');
            resetForm();
        } catch (sendError) {
            console.error('Error sending email:', sendError);
            alert(`Error sending email: ${sendError.message}`);
        }
    };

    const onRecaptchaChange = () => {
        setVerified(true);
    };

    const onRecaptchaErrored = () => {
        alert('There was an issue with reCAPTCHA. Please try again.');
    };

    const showSuccessToastMessage = (message) => {
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const showErrorToastMessage = (message) => {
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    if (isLoading) {
        return <Box display="flex" justifyContent="center"><Typography>Sending...</Typography></Box>;
    }

    if (error) {
        alert(`Error sending email: ${error.message}`);
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                maxHeight: "100vh",
                pt: 8,
                mt: -12
            }}
        >
            <Box sx={{maxWidth: 400, mx: "auto", p: 2}}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Name"
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        margin="normal"
                        required
                        inputProps={{ style: { fontSize: 14 } }}
                        InputLabelProps={{ style: { fontSize: 14} }}
                        sx={{ '& .MuiInputBase-input': { padding: '10px 12px', height: 'auto' } }}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        margin="normal"
                        required
                        type="email"
                        inputProps={{ style: { fontSize: 14 } }}
                        InputLabelProps={{ style: { fontSize: 14} }}
                        sx={{ '& .MuiInputBase-input': { padding: '10px 12px', height: 'auto' } }}
                    />
                    <TextField
                        fullWidth
                        label="Message"
                        value={emailContent}
                        onChange={(e) => setEmailContent(e.target.value)}
                        margin="normal"
                        required
                        multiline
                        rows={4}
                        inputProps={{ style: { fontSize: 14 } }}
                        InputLabelProps={{ style: { fontSize: 14} }}
                        sx={{ '& .MuiInputBase-input': { padding: '10px 12px', height: 'auto' } }}
                    />
                    <ReCAPTCHA
                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                        onChange={onRecaptchaChange}
                        onErrored={onRecaptchaErrored}
                        sx={{ transform: 'scale(0.5)', transformOrigin: '0 0' }}
                    />

                    <Box sx={{ display: "flex", justifyContent: "center", mt: 2, ml: -20 }}>
                        <Button variant="contained" type="submit" disabled={!verified} sx={{ mx: "0.5em" }}>
                            SEND
                        </Button>
                        <Button variant="outlined" onClick={onCancel} sx={{ mx: "0.5em" }}>
                            CANCEL
                        </Button>
                    </Box>
                </form>
            </Box>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </Box>
    );
}