import React from 'react';
import Header from '../Header';
import BottomNav from '../BottomNav';
import BasicTabs from './BasicTabs';
import styled from 'styled-components';

const ImageDetails = () => {

    const StyledImage = styled.img`
      width: 35%;
      height: auto;
      display: block;
      margin: 15vh auto 0;
    `;

    return (
        <>
            <Header/>
            <StyledImage
                src="https://i.ytimg.com/vi/EU0unRN6BdU/maxresdefault.jpg"
                alt="before-and-after"
            />
            <BasicTabs/>
            <BottomNav/>
        </>
    );
};

export default ImageDetails;
