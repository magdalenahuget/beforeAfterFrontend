import React, {useState, useRef} from "react";
import {TextField, Button, Typography, Box} from "@mui/material";
import ReCAPTCHA from 'react-google-recaptcha';
import {emailsDataApi} from '../../api/emailsApi';

export default function ContactForm({offerUserId, onCancel}) {
    const [senderName, setSenderName] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [emailContent, setEmailContent] = useState('');
    const [recaptchaToken, setRecaptchaToken] = useState("");
    const recaptchaRef = useRef(null);
    const recaptchaSiteKey = `${process.env.REACT_APP_RECAPTCHA_SITE_KEY}`;

    const resetForm = () => {
        setSenderName("");
        setSenderEmail("");
        setEmailContent("");
        setRecaptchaToken("");
        if (recaptchaRef.current) {
            recaptchaRef.current.reset();
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!recaptchaToken) {
            console.log('Please verify that you are not a robot.');
            return;
        }

        const contactFormData = {
            offerUserId,
            senderName,
            senderEmail,
            emailContent
        };

        try {
            await emailsDataApi.sendContactEmail(contactFormData, {
                timeout: 30000
            });
            resetForm();
            setTimeout(() => {
                alert('Email sent successfully!');
            }, 0);
        } catch (error) {
            console.error('Error sending email:', error);
            console.log(error.response);
            console.log(error.request);
            console.log(error.message);
        }
    };

    const onRecaptchaChange = (token) => {
        setRecaptchaToken(token);
    };


    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                maxHeight: "100vh",
                pt: 8,
                mt: -10
            }}
        >
            <Box sx={{maxWidth: 600, mx: "auto", p: 2}}>
                <Typography variant="h5" align="center" mb={2}>
                    Contact Us
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Name"
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        margin="normal"
                        required
                        type="email"
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
                    />
                    {recaptchaToken ? (
                        <Button variant="contained" type="submit" sx={{mt: 2}}>
                            SEND
                        </Button>
                    ) : (
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={recaptchaSiteKey}
                            onChange={onRecaptchaChange}
                            sx={{my: 2}}
                        />
                    )}
                    <Button variant="outlined" onClick={onCancel} sx={{mt: 2}}>
                        CANCEL
                    </Button>
                </form>
            </Box>
        </Box>
    );
}