import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import axios from "axios";
import { MenuItem, TextField } from "@mui/material";

const CategorySelect = ({ selectedCategory, setSelectedCategory }) => {
    const [categories, setCategories] = useState([]);

    // CATEGORY
    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/categories")
            .then((response) => {
                console.log(response.data);
                setCategories(response.data);
            })
            .catch((error) => {
                console.error("Error downloading data:", error);
            });
    }, []);

    const handleSelectedCategory = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <Box sx={{ marginBottom: 2, width: '100%' }}>
            <TextField
                fullWidth
                select
                label="Category"
                helperText="Please select category"
                value={selectedCategory}
                name={"category"}
                onChange={handleSelectedCategory}
                sx={{ height: '100%' }}
            >
                {categories.map((category) => (
                    <MenuItem key={category.id} value={category}>
                        {category.categoryName}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    );
};

export default CategorySelect;