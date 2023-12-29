import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useNavigate } from "react-router-dom";

const style = {
    textAlign: 'center', // Dodaj styl do wyśrodkowania
};

const ModalTip = ({ open, handleOpen, handleClose }) => {

    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/profile');
    };

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="sm"
                fullWidth
            >
                <Box sx={style}>
                    <DialogTitle>
                        To add a new service, you must first complete your contact details.
                    </DialogTitle>
                    <DialogContent>
                        <Typography variant="body1">
                            Click the Continue button to be redirected to the contact details form.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleContinue}>Continue</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </div>
    );
}

export default ModalTip;
