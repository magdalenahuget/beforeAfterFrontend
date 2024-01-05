import React from 'react';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import a11yProps from "../offer/tabs/a11yProps";

const ProfileTabs = ({value, handleTabChange}) => {

    return (
        <div>
            <Tabs value={value} onChange={handleTabChange} aria-label="basic tabs example">
                <Tab label="My Images" {...a11yProps(0)} />
                <Tab label="About me" {...a11yProps(1)} />
                <Tab label="Contact" {...a11yProps(2)} />
            </Tabs>
        </div>
    );
};

export default ProfileTabs;