import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { auth } from "../configs/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "@mui/material";
import { async } from "@firebase/util";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const pages = [
    { name: "Bookmark", path: "/bookmark" },
    { name: "Bought", path: "/bought" },
    { name: "Checkout", path: "/checkout" },
];
const settings = ["Logout"];

export default function NavBar() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <AppBar position="fixed">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            M O V I E S
                        </Typography>

                        <Box sx={{ flexGrow: 1, float: "end", display: { xs: "flex", md: "none" } }}>
                            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {user &&
                                    pages.map((page, key) => (
                                        <MenuItem key={"page-" + key} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page.name}</Typography>
                                        </MenuItem>
                                    ))}
                            </Menu>
                        </Box>

                        <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                            {user &&
                                pages.map((page, key) => (
                                    <Typography
                                        key={"page-" + key}
                                        noWrap
                                        component="a"
                                        href={page.path}
                                        sx={{
                                            mr: 2,
                                            fontFamily: "monospace",
                                            color: "inherit",
                                            textDecoration: "none",
                                        }}
                                    >
                                        {page.name}
                                    </Typography>
                                ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            {!user ? (
                                <Typography
                                    component="a"
                                    href="/login"
                                    sx={{
                                        fontFamily: "monospace",
                                        color: "inherit",
                                        textDecoration: "none",
                                    }}
                                >
                                    Login
                                </Typography>
                            ) : (
                                <>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Typography
                                                component="span"
                                                sx={{
                                                    fontFamily: "monospace",
                                                    color: "white",
                                                    textDecoration: "none",
                                                    marginRight: "10px",
                                                }}
                                            >
                                                {user.email}
                                            </Typography>
                                            <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random/?avatar" />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: "45px" }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        <Button variant="text" onClick={handleSignOut}>
                                            Sing Out
                                        </Button>
                                    </Menu>
                                </>
                            )}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar />
        </>
    );
}
