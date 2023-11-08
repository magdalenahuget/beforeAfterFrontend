import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {TextField} from '@mui/material';
import Button from '@mui/material/Button';
import {Grid} from '@mui/material';
import Header from "./Header";
import BottomNav from "./BottomNav";
import axios from "axios";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';


const AddImage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [categories, setCategories] = useState([]);

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

    // useEffect(() => {
    //     axios.get('http://localhost:8080/api/v1/categories', {
    //         headers: {
    //             "Authorization": `Bearer ${sessionStorage.getItem('jwt')}`
    //         }
    //     })
    //         .then(response => {
    //             console.log('Status: ' + response.status);
    //             if (response.status === 200) {
    //                 console.log('Welcome solarwatch!');
    //                 // setCategories(response.data)
    //             } else {
    //                 console.log('Unauthorized.');
    //                 window.location.href = 'http://localhost:3000/login';
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Connection error:', error);
    //             window.location.href = 'http://localhost:3000/login';
    //         });
    // }, []); // Pusta tablica jako drugi argument oznacza, że useEffect zostanie wywołany tylko raz, po pierwszym renderowaniu


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

                <Container
                    maxWidth="sm"
                    sx={{
                        marginTop: 10,
                        marginBottom: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h4" component="div" gutterBottom>
                        Add image
                    </Typography>
                    <Box sx={{marginBottom: 2, width: '100%'}}>
                        <TextField
                            fullWidth
                            id="outlined-select-category"
                            select
                            label="Category"
                            defaultValue=""
                            helperText="Please select category"
                        />
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
                            Upload file
                            <VisuallyHiddenInput type="file"/>
                        </Button>
                    </Box>
                    <Box sx={{marginBottom: 2, width: '100%'}}>
                        <Button onChange={onFileChange} onClick={onFileUpload} component="label" variant="contained" startIcon={<CloudUploadIcon/>} sx={{width: '100%'}}>
                            Upload file
                            <VisuallyHiddenInput type="file"/>
                        </Button>
                    </Box>

                    <Box sx={{marginTop: 6, marginBottom: 4, width: '100%'}}>
                        <Button variant="contained" fullWidth>Save</Button>
                    </Box>
                </Container>
            </Box>
            <BottomNav/>
        </>
    );
};

export default AddImage;