import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ShoppingCart } from "@mui/icons-material";
import { ImageList, ImageListItem } from "@mui/material";

export default function MovieCard({ movie }) {
    return (
        <Card>
            <CardMedia component="img" height="400" image={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path} alt="movie avatar" />
        </Card>
    );
}
