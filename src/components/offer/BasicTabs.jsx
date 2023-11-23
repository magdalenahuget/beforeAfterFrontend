import React, {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './tabs/TabPanel';
import a11yProps from './tabs/a11yProps';
import ContactDetails from '../contact_details/ContactDetails'
import AboutMe from '../profil/AboutMe';
import ImageDescription from "../image/ImageDescription";

const BasicTabs = ({userId, description, isSmallScreen}) => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={{
            width: '100%',
            mt: theme => (isSmallScreen ? theme.spacing(-5) : theme.spacing(11)),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Description" {...a11yProps(0)} />
                    <Tab label="About us" {...a11yProps(1)} />
                    <Tab label="Contact" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} sx={{textAlign: 'justify'}}>
                <ImageDescription description={description}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AboutMe userId={userId}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ContactDetails userId={userId}/>
            </TabPanel>
        </Box>
    );
};

export default BasicTabs;