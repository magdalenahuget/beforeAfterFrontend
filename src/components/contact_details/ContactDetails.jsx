import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import PinDropIcon from '@mui/icons-material/PinDrop';
import EmailIcon from '@mui/icons-material/Email';
import useContactDetails from "../../hooks/useContactDetails";
import {Box, CircularProgress, Typography} from "@mui/material";

const ContactDetails = ({userId}) => {
    const {contactDetails, isLoading, error} = useContactDetails(userId);

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


    return (
        <List sx={{width: '100%', bgcolor: 'background.paper'}} aria-label="contact details">
            <ListItem>
                <ListItemIcon>
                    <HomeIcon/>
                </ListItemIcon>
                <ListItemText
                    primary={`${contactDetails.streetName} ${contactDetails.streetNumber}, ${contactDetails.apartNumber}`}/>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <PinDropIcon/>
                </ListItemIcon>
                <ListItemText primary={`${contactDetails.cityName}, ${contactDetails.postcode}`}/>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <PhoneIcon/>
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
                    <LanguageIcon/>
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Link href={contactDetails.webpage} target="_blank" rel="noopener">
                            {contactDetails.webpage}
                        </Link>
                    }
                />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <EmailIcon/>
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Link href={`make_this_email_dynamic@gmail.com`} underline="none">
                            make_this_email_dynamic@gmail.com
                        </Link>
                    }
                />
            </ListItem>

        </List>
    );
};

export default ContactDetails;
