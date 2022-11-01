import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
            <CardMedia component="img" height="250" image={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="movie avatar" onMouseOver={({ target }) => handelMouseOver(target)} />
            <Box position={"absolute"} className="hover-card hovered" sx={{ backgroundColor: "#000000aa", zIndex: "99", top: " 0px", left: 0, width: "100%", height: "100%" }} onMouseLeave={(target) => handelMouseOut(target)}>
                <Typography variant="h6" color={"white"}>
                    {movie.title}
                </Typography>
                <Link to={"/" + movie.id}>
                    <Button variant={"contained"} sx={{ position: "absolute", top: "120px", left: "0", right: "0", width: "80%", margin: "auto", opacity: ".7" }}>
                        View Detail
                    </Button>
                </Link>
            </Box>
        </Card>
    );
}
