import React from 'react';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const CategoriesButton = ({ categories, onSelect, selectedCategories }) => {
    return (
        <div>
            <Container maxWidth="sm">
                <Stack
                    sx={{ pt: 10 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            variant={selectedCategories.includes(category) ? "contained" : "outlined"}
                            onClick={() => onSelect(category)}
                            sx={{fontFamily: 'Poppins, sans-serif', fontWeight:'300',
                                backgroundColor: selectedCategories.includes(category) ? '#EA9215' : 'inherit',
                                '&:hover': {
                                    backgroundColor: selectedCategories.includes(category) ? '#EA9215' : 'rgba(0, 0, 0, 0.05)',
                                },
                                boxShadow: selectedCategories.includes(category) ? '5px 5px 5px rgba(234, 130, 17, 0.3)' : 'inset 0px 0.5px 25px rgba(0, 0, 0, 0.3)',
                                borderColor: '#202830', // Border color
                                color: '#202830',
                                borderWidth: '1px', // Border width
                                borderStyle: 'solid',
                                fontSize: `min(2.7vw, 20px)`,
                                borderRadius: '12px 0px 12px 0px',
                            }}
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