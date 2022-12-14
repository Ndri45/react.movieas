import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { tmdb_image } from "../api/tmdb";

export default function MovieCard({ movie }) {
    const handelMouseOver = (target) => {
        const cards = document.querySelectorAll(".hover-card");
        cards.forEach((item) => item.classList.add("hovered"));

        target.nextElementSibling.classList.toggle("hovered");
    };

    const handelMouseOut = (target) => {
        target.target.classList.toggle("hovered");
    };

    return (
        <Card id={movie.id} sx={{ position: "relative" }}>
            {movie.poster_path ? (
                <CardMedia component="img" image={tmdb_image + movie.poster_path} alt="movie avatar" onMouseOver={({ target }) => handelMouseOver(target)} />
            ) : (
                <CardMedia component="img" image={"https://source.unsplash.com/random/?notfound"} alt="movie avatar" onMouseOver={({ target }) => handelMouseOver(target)} />
            )}
            <Box position={"absolute"} className="hover-card hovered" sx={{ backgroundColor: "#000000aa", zIndex: "99", top: " 0px", left: 0, width: "100%", height: "100%" }} onMouseLeave={(target) => handelMouseOut(target)}>
                <Typography variant="caption" color={"white"}>
                    {movie.title}
                </Typography>
                <Link to={"/" + movie.id}>
                    <Button variant={"contained"} sx={{ position: "absolute", top: "120px", left: "0", right: "0", width: "fit-content", margin: "auto", opacity: ".7" }}>
                        <Typography variant="caption" color={"white"}>
                            View Detail
                        </Typography>
                    </Button>
                </Link>
            </Box>
        </Card>
    );
}
