import { Box, Button, Link, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CatagoryList({ genreId, handleGenreId }) {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            const { data } = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=40f0e7d626ebd843c9c96e4bcdc282b0");

            setGenres(data.genres);
        };
        fetchGenres();
    }, []);

    return (
        <Box
            sx={{
                backgroundColor: "lightblue",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                typography: "body2",
                "& > :not(style) + :not(style)": {
                    ml: 2,
                },
                left: 0,
                right: 0,
                zIndex: 999,
            }}
        >
            {genres.map((genre) => {
                return (
                    <Button variant={genre.id === genreId ? "contained" : "text"} key={genre.id} onClick={() => handleGenreId(genre.id)}>
                        <Typography variant="caption">{genre.name}</Typography>
                    </Button>
                );
            })}
        </Box>
    );
}
