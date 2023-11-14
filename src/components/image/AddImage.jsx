import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import { FormControl, FormLabel, MenuItem, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Header from "../layout/Header";
import BottomNav from "../layout/BottomNav";
import Upload from '@mui/icons-material/Upload';
import axios from "axios";
import {styled} from '@mui/material/styles';
import CardMedia from "@mui/material/CardMedia";

const AddImage = () => {
        const [categories, setCategories] = useState([]);
        const [selectedCategory, setSelectedCategory] = useState('');
        const [description, setDescription] = useState('');
        const [city, setCity] = useState('');
        const [selectedBeforeFile, setSelectedBeforeFile] = useState(null);
        const [selectedAfterFile, setSelectedAfterFile] = useState(null);

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

        // DESCRIPTION
        const handleDescription = (event) => {
            setDescription(event.target.value);
        };

        // CITY
        const handleCity = (event) => {
            setCity(event.target.value);
        };

        // BEFORE IMAGE
        const onBeforeFileChange = (event) => {
            setSelectedBeforeFile(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = () => {
                const img = new Image();
                img.onload = () => {
                    setSelectedBeforeFile(img);
                };
                img.src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
            console.log(selectedBeforeFile);
        };

        // AFTER IMAGE
        const onAfterFileChange = (event) => {
            setSelectedAfterFile(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = () => {
                const img = new Image();
                img.onload = () => {
                    setSelectedAfterFile(img);
                };
                img.src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
            console.log(selectedAfterFile);
        };

        // SUBMIT FORM
        const handleSubmit = async (event) => {
            event.preventDefault();

            const dataToSend = new FormData();
            dataToSend.append('categoryId', '1');
            dataToSend.append('description', description);
            dataToSend.append('city', city);
            let collage = getCollage();
            let newMergedFiles = convertImageUrlToFile(collage, 'collage.png');
            dataToSend.append('file', newMergedFiles);
            dataToSend.append('userId', '1');
            let config = {
                maxBodyLength: Infinity,
            };

            axios.post(`http://localhost:8080/api/v1/images`, dataToSend, config)
                .then(response => {
                    console.log('Success:', response);
                    // Reset form fields
                    setSelectedCategory('');
                    setDescription('');
                    setCity('');
                    setSelectedBeforeFile(null);
                    setSelectedAfterFile(null);
                })
                .catch(error => {
                    console.error('Data sending error:', error);
                });
        };

        // MERGE IMAGES

        function convertImageUrlToFile(imageUrl, fileName) {
            var splittedUrl = imageUrl.split(','), mime = splittedUrl[0].match(/:(.*?);/)[1],
                bstr = atob(splittedUrl[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], fileName, {type: mime});
        }

        const getCollage = () => {
            return createCollageUrlFrom(selectedBeforeFile, selectedAfterFile);
        }

        const createCollageUrlFrom = (imageBefore, imageAfter) => {
            const canvas = document.createElement('canvas');
            const canvasRenderingContext2D = canvas.getContext('2d');

            // Calculate the width and height of the merged image
            const collageWidth = imageBefore.width + imageAfter.width;
            const collageHeight = Math.max(imageBefore.height, imageAfter.height);

            // Set canvas width and height based on merged dimensions
            canvas.width = collageWidth;
            canvas.height = collageHeight;

            // Draw the first image at (0, 0) position
            canvasRenderingContext2D.drawImage(imageBefore, 0, 0);

            // Draw the second image next to the first image
            canvasRenderingContext2D.drawImage(imageAfter, imageBefore.width, 0);

            // Return the merged image as a data URL
            return canvas.toDataURL('image/png');
        };

        // HANDLING IMAGES DISPLAY TESTING
        const [allImagesFromDb, setAllImagesFromDb] = useState(null);

        const loadAllUploadedImages = async (e) => {
            const result = await axios.get(
                `http://localhost:8080/api/v1/images`
            );
            setAllImagesFromDb(result.data);
        };

        const SetButtonType = styled('input')({
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
                                value={description}
                                helperText="Please type service description"
                                name={"description"}
                                onChange={handleDescription}
                            />
                        </Box>
                        <Box sx={{marginBottom: 2, width: '100%'}}>
                            <TextField
                                fullWidth
                                id="outlined-required"
                                label="City"
                                value={city}
                                helperText="Please select a city"
                                name={"city"}
                                onChange={handleCity}
                            />
                        </Box>
                        <Box sx={{marginBottom: 2, width: '100%'}}>
                            <Button name={"before-file"} onChange={onBeforeFileChange} component="label"
                                    variant="contained"
                                    startIcon={<Upload/>} sx={{width: '100%'}}>
                                Upload before image
                                <SetButtonType type="file"/>
                            </Button>
                        </Box>
                        <Box sx={{marginBottom: 2, width: '100%'}}>
                            <Button onChange={onAfterFileChange} component="label" variant="contained"
                                    startIcon={<Upload/>} sx={{width: '100%'}}>
                                Upload after image
                                <SetButtonType type="file"/>
                            </Button>
                        </Box>
                        <Box sx={{marginTop: 6, marginBottom: 4, width: '100%'}}>
                            <Button onClick={handleSubmit} variant="contained" fullWidth>Save</Button>
                        </Box>
                    </FormControl>
                    <Box sx={{marginTop: 6, marginBottom: 10, width: '100%'}}>
                        <Button onClick={loadAllUploadedImages} variant="contained" fullWidth>Display all images</Button>
                        <CardMedia component="div"/>
                        {allImagesFromDb ? allImagesFromDb.map((image) => (
                            <img key={image['id']} src={'data:image/jpeg;base64,' + image['file']}/>)) : ''}
                    </Box>
                </Box>
                <BottomNav/>
            </>
        );
    }
;

export default AddImage;