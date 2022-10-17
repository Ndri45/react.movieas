import React, { useState } from "react";
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LockOutlined } from "@mui/icons-material";

const Login = () => {
    const btnstyle = { margin: "8px 0" };
    const avatarStyle = { backgroundColor: "#1bbd7e" };
    const paperStyle = { padding: 20, width: 400, margin: "120px auto" };
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <LockOutlined />
                    </Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label="Username" placeholder="Enter username" variant="outlined" fullWidth required onChange={({ target }) => setUsername(target.value)} sx={{ margin: "10px 0" }} />
                <TextField label="Password" placeholder="Enter password" type="password" variant="outlined" fullWidth required onChange={({ target }) => setUsername(target.value)} />
                <FormControlLabel control={<Checkbox name="checkedB" color="primary" />} label="Remember me" />
                <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>
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
