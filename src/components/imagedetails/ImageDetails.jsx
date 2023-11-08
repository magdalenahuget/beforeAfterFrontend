
/*

Wersja 1:
- wersja przeglądarkowa: BasicTabs znajduje się obok, po prawej stronie zdjęc.
- wersja mobilna/ przejście BasicTabs do pozycji 'pod komponentem zdjęcie'

 */


import React from 'react';
import Header from '../Header';
import BottomNav from '../BottomNav';
import BasicTabs from './BasicTabs';
import { Avatar, Typography, Box } from "@mui/material";
import styled from 'styled-components';
import SimpleImageSlider from "react-simple-image-slider";

const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start; 
  align-items: flex-start;
  margin-top: 11vh;
  margin-left: 5vw; 
  gap: 2vw; 
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: auto;
`;


const LogoAndNameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0;
`;

const StyledAvatar = styled(Avatar)`
  margin-right: 1vh;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const CompanyName = styled(Typography)`
  font-weight: bold;
`;

const ImageDetails = () => {
    const images = [
        { url: "https://www.younghouselove.com/wp-content/uploads/2018/09/Beach-House-Before-After-Doorway-Side-By-Side-650x457.jpg" },
        { url: "https://www.moreforlessstl.com/cm/dpl/images/create/home_renovation_timeline.jpg" },
    ];
    return (
        <>
            <Header/>
            <Box sx={{ maxWidth: '100%', margin: 'auto', padding: '0' }}>
                <MainContainer>
                    <LeftContainer>
                        <LogoAndNameContainer>
                            <StyledAvatar
                                alt="Company Logo"
                                src="https://png.pngtree.com/template/20191014/ourmid/pngtree-home-renovation-logo-design-template-with-green-leaf-image_317632.jpg"
                                sx={{ width: 80, height: 80 }}
                            />
                            <CompanyName variant="h5">Budomex Sp. z o.o.</CompanyName>
                        </LogoAndNameContainer>
                        {/*<StyledImage*/}
                        {/*    src="https://www.younghouselove.com/wp-content/uploads/2018/09/Beach-House-Before-After-Doorway-Side-By-Side-650x457.jpg"*/}
                        {/*    alt="before-and-after"*/}
                        {/*/>*/}
                        <SimpleImageSlider
                            width={896}
                            height={504}
                            images={images}
                            showBullets={true}
                            showNavs={true}
                        />
                    </LeftContainer>
                    <BasicTabs/>
                </MainContainer>
            </Box>
            <BottomNav/>
        </>
    );
};

export default ImageDetails;



/*

A second version in which the tabs are under the image component;


 */


// import React from 'react';
// import Header from '../Header';
// import BottomNav from '../BottomNav';
// import BasicTabs from './BasicTabs';
// import styled from 'styled-components';
// import { Avatar, Typography } from "@mui/material";
//
// const LogoAndNameContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   margin: 8vh 0 0;
//   padding-left: calc(50% - 17.5%);
// `;
//
// const StyledAvatar = styled(Avatar)`
//   margin-right: 1vh;
// `;
//
// const StyledImage = styled.img`
//   width: 35%;
//   height: auto;
//   display: block;
//   margin: 0 auto;
// `;
//
// const CompanyName = styled(Typography)`
//   font-weight: bold;
// `;
//
// const ImageDetails = () => {
//     return (
//         <>
//             <Header/>
//             <LogoAndNameContainer>
//                 <StyledAvatar
//                     alt="Company Logo"
//                     src="https://png.pngtree.com/template/20191014/ourmid/pngtree-home-renovation-logo-design-template-with-green-leaf-image_317632.jpg"
//                     sx={{ width: 80, height: 80 }}
//                 />
//                 <CompanyName variant="h5">Budomex Sp. z o.o.</CompanyName>
//             </LogoAndNameContainer>
//             <StyledImage
//                 src="https://www.younghouselove.com/wp-content/uploads/2018/09/Beach-House-Before-After-Doorway-Side-By-Side-650x457.jpg"
//                 alt="before-and-after"
//             />
//             <BasicTabs/>
//             <BottomNav/>
//         </>
//     );
// };
//
// export default ImageDetails;
//
//

