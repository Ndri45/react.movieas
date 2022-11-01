import { Box, Link } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CatagoryList() {
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
            }}
        >
            {genres.map((genre) => {
                return (
                    <Link key={genre.id} href="#" underline="hover">
                        {genre.name}
                    </Link>
                );
            })}
        </Box>
    );
}
