import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ShoppingCart } from "@mui/icons-material";

export default function MovieCard({ movie }) {
    return (
        <Card>
            <CardMedia component="img" width="500" image={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="animal avatar" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" height={"80px"}>
                    {movie.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" component="div" height="140px">
                    {movie.overview}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
                <Button size="small" variant="contained">
                    <ShoppingCart />
                </Button>
            </CardActions>
        </Card>
    );
}
