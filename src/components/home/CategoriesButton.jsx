import React from 'react';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Container from "@mui/material/Container";


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