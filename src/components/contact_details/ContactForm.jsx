// import React, {useState, useRef, useEffect} from "react";
// import {TextField, Button, Typography, Box} from "@mui/material";
// import ReCAPTCHA from 'react-google-recaptcha';
// import {emailsDataApi} from '../../api/emailsApi';
//
// export default function ContactForm({offerUserId, onCancel}) {
//     const [senderName, setSenderName] = useState('');
//     const [senderEmail, setSenderEmail] = useState('');
//     const [emailContent, setEmailContent] = useState('');
//     const [isFormFilled, setIsFormFilled] = useState(false);
//     const [recaptchaToken, setRecaptchaToken] = useState("");
//     const recaptchaRef = useRef(null);
//     const recaptchaSiteKey = `${process.env.REACT_APP_RECAPTCHA_SITE_KEY}`;
//
//     useEffect(() => {
//         const isFilled = senderName.trim() !== '' && senderEmail.trim() !== '' && emailContent.trim() !== '';
//         setIsFormFilled(isFilled);
//     }, [senderName, senderEmail, emailContent]);
//
//     const resetForm = () => {
//         setSenderName("");
//         setSenderEmail("");
//         setEmailContent("");
//         setRecaptchaToken("");
//         if (recaptchaRef.current) {
//             recaptchaRef.current.reset();
//         }
//     };
//
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//
//         if (!recaptchaToken) {
//             alert('Please verify that you are not a robot.');
//             return;
//         }
//
//         const contactFormData = {
//             offerUserId,
//             senderName,
//             senderEmail,
//             emailContent
//         };
//
//         try {
//             await emailsDataApi.sendContactEmail(contactFormData, {
//                 timeout: 30000
//             });
//             alert('Email sent successfully!');
//             resetForm();
//         } catch (error) {
//             alert(`Error sending email: ${error.message}`);
//             console.error('Error sending email:', error);
//         }
//     };
//
//     const onRecaptchaChange = (token) => {
//         setRecaptchaToken(token);
//     };
//
//     const onRecaptchaErrored = () => {
//         alert('There was an issue with reCAPTCHA. Please try again.');
//     };
//
//     return (
//         <Box
//             sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "flex-start",
//                 maxHeight: "100vh",
//                 pt: 8,
//                 mt: -10
//             }}
//         >
//             <Box sx={{maxWidth: 600, mx: "auto", p: 2}}>
//                 <Typography variant="h5" align="center" mb={2}>
//                     Contact Us
//                 </Typography>
//                 <form onSubmit={handleSubmit}>
//                     <TextField
//                         fullWidth
//                         label="Name"
//                         value={senderName}
//                         onChange={(e) => setSenderName(e.target.value)}
//                         margin="normal"
//                         required
//                     />
//                     <TextField
//                         fullWidth
//                         label="Email"
//                         value={senderEmail}
//                         onChange={(e) => setSenderEmail(e.target.value)}
//                         margin="normal"
//                         required
//                         type="email"
//                     />
//                     <TextField
//                         fullWidth
//                         label="Message"
//                         value={emailContent}
//                         onChange={(e) => setEmailContent(e.target.value)}
//                         margin="normal"
//                         required
//                         multiline
//                         rows={4}
//                     />
//                     {isFormFilled && (recaptchaToken ?
//                             (
//                                 <Button variant="contained" type="submit" sx={{mt: 2}}>
//                                     SEND
//                                 </Button>
//                             ) : (
//                                 <ReCAPTCHA
//                                     ref={recaptchaRef}
//                                     sitekey={recaptchaSiteKey}
//                                     onChange={onRecaptchaChange}
//                                     onErrored={onRecaptchaErrored}
//                                     sx={{my: 2}}
//                                 />
//                             )
//                     )}
//                     <Button variant="outlined" onClick={onCancel} sx={{mt: 2}}>
//                         CANCEL
//                     </Button>
//                 </form>
//             </Box>
//         </Box>
//     );
// }
//


import React, {useState, useRef, useEffect} from "react";
import {TextField, Button, Typography, Box} from "@mui/material";
import ReCAPTCHA from 'react-google-recaptcha';
import {useSendContactEmail} from '../../hooks/useEmails';

export default function ContactForm({offerUserId, onCancel}) {
    const [senderName, setSenderName] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [emailContent, setEmailContent] = useState('');
    const [isFormFilled, setIsFormFilled] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState("");   //zamienic
    const recaptchaRef = useRef(null);
    const recaptchaSiteKey = `${process.env.REACT_APP_RECAPTCHA_SITE_KEY}`;
    const {send, isLoading, error} = useSendContactEmail();

    useEffect(() => {
        const isFilled = senderName.trim() !== '' && senderEmail.trim() !== '' && emailContent.trim() !== '';
        setIsFormFilled(isFilled);
    }, [senderName, senderEmail, emailContent]);

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
            alert('Email sent successfully!');
            resetForm();
        } catch (sendError) {
            console.error('Error sending email:', sendError);
            alert(`Error sending email: ${sendError.message}`);
        }
    };

    const onRecaptchaChange = (token) => {
        console.log(recaptchaSiteKey)
        setRecaptchaToken(token);
    };

    const onRecaptchaErrored = () => {
        alert('There was an issue with reCAPTCHA. Please try again.');
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
                    {isFormFilled && (recaptchaToken ?
                            (
                                <Button variant="contained" type="submit" sx={{mt: 2}}>
                                    SEND
                                </Button>
                            ) : (
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={recaptchaSiteKey}
                                    onChange={onRecaptchaChange}
                                    onErrored={onRecaptchaErrored}
                                    sx={{my: 2}}
                                />
                            )
                    )}
                    <Button variant="outlined" onClick={onCancel} sx={{mt: 2}}>
                        CANCEL
                    </Button>
                </form>
            </Box>
        </Box>
    );
}