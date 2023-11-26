import {useState} from "react";
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import PinDropIcon from '@mui/icons-material/PinDrop';
import EmailIcon from '@mui/icons-material/Email';
import useContactDetails from "../../hooks/useContactDetails";
import {Box, CircularProgress, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";
import {getUserIdFromToken} from '../../utils/jwtUtils';


const isValueNotEmpty = (value) => value && value.trim() !== '';
const ContactDetails = ({offerUserId, isOwnProfile}) => {
    const effectiveUserId = isOwnProfile ? getUserIdFromToken() : offerUserId;
    const {contactDetails, isLoading, error} = useContactDetails(effectiveUserId);
    const [showContactForm, setShowContactForm] = useState(false);
    const [isPhoneBlurred, setIsPhoneBlurred] = useState(true);

    /*
        UWAGA Gdy ContacDetails jest wykorzystywany w /Profile należy przekazać <ContactDetails isOwnProfile={true} />
     */

    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center">
                <CircularProgress/>
            </Box>
        );
    }

    if (error) {
        return (
            <Typography color="error" textAlign="center">
                Error loading the contact details.
            </Typography>
        );
    }

    if (showContactForm) {
        return <ContactForm offerUserId={offerUserId} onCancel={() => setShowContactForm(false)}/>;
    }

    const handlePhoneClick = () => {
        setIsPhoneBlurred(false);
    };

    return (
        <List sx={{width: '100%', bgcolor: 'background.paper'}} aria-label="contact details">
            {isValueNotEmpty(contactDetails.streetName) && (
                <ContactItem icon={<HomeIcon/>}>
                    {`${contactDetails.streetName} ${contactDetails.streetNumber}, ${contactDetails.apartNumber}`}
                </ContactItem>
            )}
            {isValueNotEmpty(contactDetails.cityName) && (
                <ContactItem icon={<PinDropIcon/>}>
                    {`${contactDetails.cityName}, ${contactDetails.postcode}`}
                </ContactItem>
            )}
            {isValueNotEmpty(contactDetails.phoneNumber) && (
                <ContactItem icon={<PhoneIcon/>}>
                    <Link
                        href={`tel:${contactDetails.phoneNumber}`}
                        underline="none"
                        sx={{
                            filter: isPhoneBlurred ? 'blur(5px)' : 'none',
                            cursor: isPhoneBlurred ? 'pointer' : 'default',
                        }}
                        onClick={isPhoneBlurred ? handlePhoneClick : undefined}
                    >
                        {contactDetails.phoneNumber}
                    </Link>
                </ContactItem>
            )}
            {isValueNotEmpty(contactDetails.webpage) && (
                <ContactItem icon={<LanguageIcon/>}>
                    <Link href={contactDetails.webpage} target="_blank" rel="noopener">
                        {contactDetails.webpage}
                    </Link>
                </ContactItem>
            )}
            {isValueNotEmpty(contactDetails.email) && (
                <ContactItem icon={<EmailIcon/>}>
                    <Button variant="outlined" onClick={() => setShowContactForm(true)}>
                        Write to US
                    </Button>
                </ContactItem>
            )}
        </List>
    );
};

export default ContactDetails;