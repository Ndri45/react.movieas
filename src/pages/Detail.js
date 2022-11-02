import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Toolbar } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../containers/NavBAr";

export default function Detail() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const date = new Date(movie.release_date);
    console.log(date.getMonth());

    useEffect(() => {
        const fetchMovie = async () => {
            const { data: dataAxios } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=40f0e7d626ebd843c9c96e4bcdc282b0`);
            console.log(dataAxios);
            setMovie(dataAxios);
        };
        fetchMovie();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <NavBar />
            <Card sx={{ width: "1000px", margin: "60px auto" }}>
                <CardActionArea>
                    <CardMedia component="img" height={"500px"} image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="green iguana" />
                    <CardContent>
                        <Typography align="left" gutterBottom variant="h5" component="div" sx={{ marginBottom: "20px" }}>
                            {movie.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" align="left" sx={{ marginBottom: "20px" }}>
                            {movie.overview}
                        </Typography>
                        <Typography gutterBottom align="right" variant="body2" color="text.secondary" component="div" sx={{ marginBottom: "20px" }}>
                            {`Release date ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Toolbar />
        </>
    );
}
