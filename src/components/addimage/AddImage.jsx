import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import {TextField} from '@mui/material';
import Button from '@mui/material/Button';
import Header from "../Header";
import BottomNav from "../BottomNav";
import axios from "axios";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {styled} from '@mui/material/styles';
import {FormControl, FormLabel, MenuItem} from '@mui/material';
import CardMedia from "@mui/material/CardMedia";

const AddImage = () => {
        const [selectedFile, setSelectedFile] = useState(null);
        const [categories, setCategories] = useState([]);
        const [selectedCategory, setSelectedCategory] = useState('');
        const [description, setDescription] = useState('');
        const [city, setCity] = useState('');
        const [file, setFile] = useState('');

        const onFileChange = (event) => {
            setSelectedFile(event.target.files[0]);

        };

        const handleSelectedCategory = (event) => {
            setSelectedCategory(event.target.value);
        };

        const handleDescription = (event) => {
            setDescription(event.target.value);
        };

        const handleCity = (event) => {
            setCity(event.target.value);
        };


        // HANDLING IMAGE TESTING ==============================================================
        const [imageSrc, setImageSrc] = useState(null);

        const loadImage = async (e) => {
            console.log('load Image func')
            const result = await axios.get(
                `http://localhost:8080/api/v1/images`
            );
            setImageSrc('data:image/jpeg;base64,' + result.data[0]['file'])
            console.log(imageSrc);
            console.log(result.data[0]);
            console.log(result.data[0]['file']);
        };
        //  ==============================================================

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


        const handleSubmit = (event) => {
            event.preventDefault();

            const formData = new FormData();
            formData.append('categoryId', '1');
            formData.append('description', description);
            formData.append('city', city);
            formData.append('file', selectedFile);
            formData.append('userId', '1');
            console.log('Success:', formData.get("city"));
            console.log('Success:', formData.get("description"));
            console.log('Success:', formData.get("categoryId"));
            console.log('Success:', formData.get("file"));
            console.log('Success:', formData.get("userId"));

            let config = {
                maxBodyLength: Infinity,
            };

            axios.post(`http://localhost:8080/api/v1/images`, formData, config)
                .then(response => {
                    console.log('Success:', response);
                })
                .catch(error => {
                    console.error('Data sending error:', error);
                });
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
                        sx={{
                            marginTop: 10,
                            marginBottom: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <FormLabel variant="h4" component="div">
                            Add image
                        </FormLabel>
                        <Box sx={{marginBottom: 2, width: '100%'}}>
                            <TextField
                                fullWidth
                                select
                                label="Category"
                                helperText="Please select category"
                                value={selectedCategory}
                                name={"category"}
                                onChange={handleSelectedCategory}
                                sx={{height: '100%'}}
                            >
                                {categories.map((category) => (
                                    <MenuItem key={category.id} value={category.categoryName}>
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
                                name={"description"}
                                onChange={handleDescription}
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
                                name={"city"}
                                onChange={handleCity}
                            />
                        </Box>
                        <Box sx={{marginBottom: 2, width: '100%'}}>
                            <Button name={"file"} onChange={onFileChange} component="label"
                                    variant="contained"
                                    startIcon={<CloudUploadIcon/>} sx={{width: '100%'}}>
                                Upload before image
                                <VisuallyHiddenInput type="file"/>
                            </Button>
                        </Box>
                        {/*<Box sx={{marginBottom: 2, width: '100%'}}>*/}
                        {/*    <Button onChange={onFileChange} component="label" variant="contained"*/}
                        {/*            startIcon={<CloudUploadIcon/>} sx={{width: '100%'}}>*/}
                        {/*        Upload after image*/}
                        {/*        <VisuallyHiddenInput type="file"/>*/}
                        {/*    </Button>*/}
                        {/*</Box>*/}

                        <Box sx={{marginTop: 6, marginBottom: 4, width: '100%'}}>
                            <Button onClick={handleSubmit} variant="contained" fullWidth>Save</Button>
                        </Box>
                    </FormControl>
                    <Box sx={{marginTop: 6, marginBottom: 10, width: '100%'}}>
                        <Button onClick={loadImage} variant="contained" fullWidth>Display image</Button>
                        <CardMedia
                            component="div"
                            image="https://source.unsplash.com/random?wallpapers"
                        />
                        {imageSrc ? <img src={imageSrc} alt="test image"/> : ''}
                    </Box>
                </Box>
                <BottomNav/>
            </>
        );
    }
;

export default AddImage;