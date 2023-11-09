import React, { useEffect, useState } from 'react';
import { contactDetailsApi } from '../../api/contactDetailsApi';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import PinDropIcon from '@mui/icons-material/PinDrop';

const ContactDetailsPanel = ({ userId }) => {
    const [contactDetails, setContactDetails] = useState({});

    useEffect(() => {
        contactDetailsApi.getContactDetailsByUserId(userId)
            .then(response => {
                setContactDetails(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the contact details:', error);
            });
    }, [userId]);

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }} aria-label="contact details">
            <ListItem>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={`${contactDetails.streetName} ${contactDetails.streetNumber}, ${contactDetails.apartNumber}`} />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <PinDropIcon />
                </ListItemIcon>
                <ListItemText primary={`${contactDetails.postcode}`} />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <PhoneIcon />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Link href={`tel:${contactDetails.phoneNumber}`} underline="none">
                            {contactDetails.phoneNumber}
                        </Link>
                    }
                />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <LanguageIcon />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Link href={contactDetails.webpage} target="_blank" rel="noopener">
                            {contactDetails.webpage}
                        </Link>
                    }
                />
            </ListItem>
        </List>
    );
};

export default ContactDetailsPanel;
