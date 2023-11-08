import React, {useState, useEffect} from 'react';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import Container from "@mui/material/Container";

const CategoriesButton = () => {
    const [categories, setCategories] = useState([])

    async function handleSearchCategories() {
        try {
            const response = await fetch('http://localhost:8080/api/v1/categories');

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            console.log('Received data:', data);
            setCategories(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        handleSearchCategories();
    }, [])

    return (
        <div>
            <Container maxWidth="sm">
                <Stack
                    sx={{pt: 10}}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >{categories.map((category) => (
                    <Button variant="contained">{category.categoryName}</Button>
                ))}
                </Stack>
            </Container>
        </div>
    );
};

export default CategoriesButton;