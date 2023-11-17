import {useState} from "react";
import {TextField, Button, Typography, Box} from "@mui/material";

export default function ContactForm({ onCancel }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                maxHeight: "100vh",
                pt: 8,
                mt: -10
            }}
        >
            <Box sx={{maxWidth: 600, mx: "auto", p: 2}}>
                <Typography variant="h4" align="center" mb={2}>
                    Contact Us
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                        required
                        type="email"
                    />
                    <TextField
                        fullWidth
                        label="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        margin="normal"
                        required
                        multiline
                        rows={4}
                    />
                    <Button variant="contained" type="submit" sx={{mt: 2}}>
                        SEND
                    </Button>
                    <Button variant="outlined" onClick={onCancel} sx={{ mt: 2 }}>
                        CANCEL
                    </Button>
                </form>
            </Box>
        </Box>
    );
}