import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {TextField} from '@mui/material';
import Button from '@mui/material/Button';
import {Grid} from '@mui/material';

const AddImage = () => {
    const defaultTheme = createTheme();
    const [selectedFile, setSelectedFile] = useState(null);

    const onFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const onFileUpload = () => {
        // TODO: Here I can upload a file to the server and perform other file transfer related operations as merging(?)
        console.log('The file has been uploaded:', selectedFile);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            <AppBar position="fixed">
                <Toolbar>
                    <CameraIcon sx={{mr: 2}}/>
                    <Typography variant="h6" color="inherit" noWrap>
                        Before And After
                    </Typography>
                </Toolbar>
            </AppBar>
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
                    <Box sx={{marginBottom: 4, width: '100%'}}>
                        <TextField
                            fullWidth
                            id="outlined-select-category"
                            select
                            label="Category"
                            defaultValue=""
                            helperText="Please select category"
                        />
                    </Box>
                    <Box sx={{marginBottom: 4, width: '100%'}}>
                        <TextField
                            fullWidth
                            id="outlined-helperText"
                            label="Description"
                            defaultValue=""
                            helperText="Please type service description"
                        />
                    </Box>
                    <Box sx={{marginBottom: 4, width: '100%'}}>
                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            label="City"
                            defaultValue=""
                            helperText="Please select a city"
                        />
                    </Box>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <input type="file" onChange={onFileChange} style={{width: '100%'}}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" onClick={onFileUpload} fullWidth>
                                Upload Before Image
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <input type="file" onChange={onFileChange} style={{width: '100%'}}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" onClick={onFileUpload} fullWidth>
                                Upload After Image
                            </Button>
                        </Grid>
                    </Grid>
                    <Box sx={{ marginTop: 6, marginBottom: 4, width: '100%'}}>
                    <Button variant="contained" fullWidth>Save</Button>
                    </Box>
                </Container>

                <AppBar position="fixed" style={{top: 'auto', bottom: 0}}>
                    <Toolbar>
                        <HomeIcon fontSize="large"/>
                        <FavoriteBorderIcon fontSize="large"/>
                        <AddIcon fontSize="large"/>
                        <PersonIcon fontSize="large"/>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};

export default AddImage;