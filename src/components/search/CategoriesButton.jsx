import React, {useState, useEffect} from 'react';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import Container from "@mui/material/Container";
import SelectedImages from "./SelectedImages";

const CategoriesButton = () => {
    const [selectedCategories, setSelectedCategories] = useState([])
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
            setSelectedCategories(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        handleSearchCategories();


    }, []);


    const handleCategoryClick = (category) => {
        console.log("test");
        console.log(categories);

        const isCategorySelected = selectedCategories.some((selectedCategory) => selectedCategory.id === category.id);

        if (isCategorySelected) {
            const updatedSelectedCategories = selectedCategories.filter((selectedCategory) => selectedCategory.id !== category.id);
            setSelectedCategories(updatedSelectedCategories)
            console.log(categories)

        } else {
            setSelectedCategories([...selectedCategories, category]);

        }


    }


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
                        variant={selectedCategories.some((selectedCategory) => selectedCategory.id === category.id) ? "contained" : "outlined"}
                        key={category.id}
                        onClick={() => handleCategoryClick(category)}
                    >{category.categoryName}</Button>
                ))}


                </Stack>
                {/*<div>*/}
                {/*    {selectedCategories.map((category) => (*/}
                {/*        <h1>{category.categoryName}</h1>*/}
                {/*    ))}*/}

                {/*</div>*/}
            </Container>
            <SelectedImages categories={categories} />

        </div>
    );
};

export default CategoriesButton;