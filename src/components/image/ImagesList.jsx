import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import TitleTypography from "../favourites/TitleTypography";
import ImageCard from "./ImageCard";

const ImagesList = ({ isFavourite }) => {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const defaultTheme = createTheme();

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            <Container sx={{ py: 8 }} maxWidth="md">
                <TitleTypography/>
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <ImageCard
                                imageId={card}
                                isFavourite={isFavourite}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default ImagesList;