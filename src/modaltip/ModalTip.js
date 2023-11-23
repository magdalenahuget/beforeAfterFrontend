import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MuiModal from '@mui/material/Modal';
import {useNavigate} from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CustomModalTip = ({ open, handleOpen, handleClose }) => {

    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/profile');
    };

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <MuiModal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        To add a new service, you must first complete your contact details.
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Click the Continue button to be redirected to the contact details form.
                    </Typography>
                    <Button onClick={handleContinue}>Continue</Button>
                </Box>
            </MuiModal>
        </div>
    );
}

export default CustomModalTip;