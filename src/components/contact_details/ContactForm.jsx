import React, { useState, useRef } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactForm({ onCancel }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [recaptchaToken, setRecaptchaToken] = useState("");
    const recaptchaRef = useRef(null);
    const recaptchaSiteKey = `${process.env.REACT_APP_RECAPTCHA_SITE_KEY}`;


    const resetForm = () => {
        setName("");
        setEmail("");
        setMessage("");
        setRecaptchaToken("");
        if (recaptchaRef.current) {
            recaptchaRef.current.reset();
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!recaptchaToken) {
            console.log('Please verify that you are not a robot.');
            return;
        }
        console.log('Message sent:', { name, email, message });
        /*

        LOGIKA WYSYŁANIA FORMULARZA

         */
        resetForm();
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
            <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
                <Typography variant="h5" align="center" mb={2}>
                    Contact Us
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                        required
                        type="email"
                    />
                    <TextField
                        fullWidth
                        label="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        margin="normal"
                        required
                        multiline
                        rows={4}
                    />
                    {recaptchaToken ? (
                        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                            SEND
                        </Button>
                    ) : (
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={recaptchaSiteKey}
                            onChange={onRecaptchaChange}
                            sx={{ my: 2 }}
                        />
                    )}
                    <Button variant="outlined" onClick={onCancel} sx={{ mt: 2 }}>
                        CANCEL
                    </Button>
                </form>
            </Box>
        </Box>
    );
}

