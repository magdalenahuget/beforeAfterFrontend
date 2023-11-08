import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import {TextField} from '@mui/material';
import Button from '@mui/material/Button';
import Header from "../Header";
import BottomNav from "../BottomNav";
import axios from "axios";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { FormControl, FormLabel, MenuItem} from '@mui/material';
import Select from "@mui/material/Select";

const AddImage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const onFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const onFileUpload = () => {
        // TODO: Here I can upload a file to the server and perform other file transfer related operations as merging(?)
        console.log('The file has been uploaded:');
    };

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

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


    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        // props.onSelectedCategory(event.target.value);
    };

    return (
        <>
            <Header/>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    padding: '10px',
                }}
            >

                <FormControl
                    maxWidth="sm"
                    sx={{
                        marginTop: 10,
                        marginBottom: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <FormLabel variant="h4" component="div" gutterBottom>
                        Add image
                    </FormLabel>
                    <Box sx={{marginBottom: 2, width: '100%'}}>
                        <TextField
                            fullWidth
                            select
                            label="Select"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            sx={{ height: '100%' }}
                            >
                            {categories.map((category) => (
                                <MenuItem key={category.id} value={category.categoryName}  maxWidth="sm">
                                    {category.categoryName}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box sx={{marginBottom: 2, width: '100%'}}>
                        <TextField
                            fullWidth
                            id="outlined-helperText"
                            label="Description"
                            defaultValue=""
                            helperText="Please type service description"
                        />
                    </Box>
                    <Box sx={{marginBottom: 2, width: '100%'}}>
                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            label="City"
                            defaultValue=""
                            helperText="Please select a city"
                        />
                    </Box>
                    <Box sx={{marginBottom: 2, width: '100%'}}>
                        <Button onChange={onFileChange} onClick={onFileUpload} component="label" variant="contained" startIcon={<CloudUploadIcon/>} sx={{width: '100%'}}>
                            Upload before image
                            <VisuallyHiddenInput type="file"/>
                        </Button>
                    </Box>
                    <Box sx={{marginBottom: 2, width: '100%'}}>
                        <Button onChange={onFileChange} onClick={onFileUpload} component="label" variant="contained" startIcon={<CloudUploadIcon/>} sx={{width: '100%'}}>
                            Upload after image
                            <VisuallyHiddenInput type="file"/>
                        </Button>
                    </Box>

                    <Box sx={{marginTop: 6, marginBottom: 4, width: '100%'}}>
                        <Button variant="contained" fullWidth>Save</Button>
                    </Box>
                </FormControl>
            </Box>
            <BottomNav/>
        </>
    );
};

export default AddImage;