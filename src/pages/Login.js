import React, { useState } from "react";
import { Avatar, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined } from "@mui/icons-material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";

const Login = () => {
    const btnstyle = { margin: "8px 0" };
    const avatarStyle = { backgroundColor: "#1bbd7e" };
    const paperStyle = { padding: 20, width: 400, margin: "120px auto" };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            setMessage("failed to sign in");
        }
    };

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <LockOutlined />
                    </Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label="Username" placeholder="Enter username" variant="outlined" fullWidth required onChange={({ target }) => setEmail(target.value)} sx={{ margin: "10px 0" }} />
                <TextField label="Password" placeholder="Enter password" type="password" variant="outlined" fullWidth required onChange={({ target }) => setPassword(target.value)} />

                <Typography color={"red"}>{message}</Typography>

                <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth onClick={handleSubmit}>
                    Sign in
                </Button>
                <Typography>
                    <Link href="#">Forgot password ?</Link>
                </Typography>
                <Typography>
                    {" "}
                    Do you have an account ?
                    <Typography component="a" href="/register">
                        Sign Up
                    </Typography>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default Login;
