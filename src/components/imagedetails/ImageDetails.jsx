import React, { useState } from 'react';
import Header from '../Header';
import BottomNav from '../BottomNav';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

// Stylizowany obrazek
const StyledImage = styled.img`
  width: 50%;
  height: auto;
  display: block;
  margin: 15vh auto;
`;

// Funkcje pomocnicze dla zakładek (tabs)
const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

// Funkcja a11yProps
const a11yProps = (index) => {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
};

// Główny komponent ImageDetails jako stała z wykorzystaniem arrow function
const ImageDetails = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Header />
            <StyledImage
                src="https://i.ytimg.com/vi/EU0unRN6BdU/maxresdefault.jpg"
                alt="before-and-after"
            />
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Service description" {...a11yProps(0)} />
                        <Tab label="About company" {...a11yProps(1)} />
                        <Tab label="Contact details" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </Box>
            <BottomNav />
        </>
    );
};

export default ImageDetails;
