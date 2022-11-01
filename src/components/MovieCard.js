import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";

export default function MovieCard({ movie, classes }) {
    const handelMouseOver = (target) => {
        target.nextElementSibling.classList.toggle("card-hovered");
    };

    const handelMouseOut = ({ target }) => {
        target.classList.toggle("card-hovered");
    };

    return (
        <Card id={movie.id} sx={{ position: "relative" }}>
            <CardMedia component="img" height="250" image={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path} alt="movie avatar" onMouseOver={({ target }) => handelMouseOver(target)} />
            <Box position={"absolute"} className="card-hovered" sx={{ backgroundColor: "#000000aa", zIndex: "99", top: " 0px", left: 0, width: "100%", height: "100%" }} onMouseOut={(target) => handelMouseOut(target)}>
                {movie.id}
            </Box>
        </Card>
    );
}
