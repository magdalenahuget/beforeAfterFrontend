import React, {useState, useEffect} from 'react';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import Container from "@mui/material/Container";
import Display from "./ShowImages";

const CategoriesButton = ({categories,onSelect, selectedCategories}) => {

    return (
        <div>
            <Container maxWidth="sm">
                <Stack
                    sx={{pt: 10}}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >{categories.map((category) => (
                    <Button
                        key={category.id}
                        variant= {selectedCategories.includes(category) ? "contained" : "inherit"}
                        onClick={() => onSelect(category)}
                    >
                        {category.categoryName}
                    </Button>
                ))}
                </Stack>
            </Container>
        </div>
    );
};
export default CategoriesButton;