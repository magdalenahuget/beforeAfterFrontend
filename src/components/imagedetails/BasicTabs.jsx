import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './tabs/TabPanel';
import a11yProps from './tabs/a11yProps';

const BasicTabs = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const lorem =`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

    return (
        <Box sx={{ width: '100%', mt: '2vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Service description" {...a11yProps(0)} />
                    <Tab label="About us" {...a11yProps(1)} />
                    <Tab label="Contact details" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} sx={{ textAlign: 'justify' }}>{lorem}</TabPanel>
            <TabPanel value={value} index={1}>About company</TabPanel>
            <TabPanel value={value} index={2}>Contain details..</TabPanel>
        </Box>
    );
};

export default BasicTabs;