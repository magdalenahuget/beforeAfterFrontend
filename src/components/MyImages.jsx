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
import {Grid} from '@mui/material';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import { red, green } from '@mui/material/colors';
import {TextField} from "@mui/material";

const styles = {
    cardActions: {
        justifyContent: 'flex-end',
    },
    clearIcon: {
        color: red[500],
    },
    doneIcon: {
        color: green[500],
    },
    centerText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
};

const MyImages = () => {
    const [title, setTitle] = useState('Category');
    const [description, setDescription] = useState('Description');
    const [isEditing, setIsEditing] = useState(false);
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const defaultTheme = createTheme();

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleDoneClick = () => {
        setIsEditing(false);
        // TODO:Add code to save changes in description
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
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
            </Box>
            <Container sx={{py: 8}} maxWidth="md">
                <Box sx={styles.centerText}>
                    <Typography variant="h4" component="div" gutterBottom>
                        My images
                    </Typography>
                </Box>
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardMedia
                                    component="div"
                                    sx={{
                                        // 16:9
                                        pt: '56.25%',
                                    }}
                                    image="https://source.unsplash.com/random?wallpapers"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    {isEditing ? (
                                        <TextField
                                            fullWidth
                                            required
                                            label="Category"
                                            value={title}
                                            onChange={handleTitleChange}
                                            variant="outlined"
                                            margin="normal"
                                        />
                                    ) : (
                                        <Typography variant="h5" component="h2" gutterBottom>
                                            {title}
                                        </Typography>
                                    )}
                                    {isEditing ? (
                                        <TextField
                                            fullWidth
                                            required
                                            label="Description"
                                            multiline
                                            maxRows={4}
                                            value={description}
                                            onChange={handleDescriptionChange}
                                            variant="outlined"
                                            margin="normal"
                                        />
                                    ) : (
                                        <Typography variant="body1" paragraph>
                                            {description}
                                        </Typography>
                                    )}
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'flex-end' }}>
                                    <ClearIcon style={styles.clearIcon} fontSize="small" onClick={handleEditClick} />
                                    <DoneIcon style={styles.doneIcon} fontSize="small" onClick={handleDoneClick} />
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

                <AppBar position="fixed" style={{top: 'auto', bottom: 0}}>
                    <Toolbar>
                        <HomeIcon fontSize="large"/>
                        <FavoriteBorderIcon fontSize="large"/>
                        <AddIcon fontSize="large"/>
                        <PersonIcon fontSize="large"/>
                    </Toolbar>
                </AppBar>
            {/*</Box>*/}
        </ThemeProvider>
    );
};

export default MyImages;