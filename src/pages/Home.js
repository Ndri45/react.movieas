import { Box, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import CatagoryList from "../containers/CatagoryList";
import MovieCard from "../containers/MovieCard";
import NavBar from "../containers/NavBAr";
import SearchBar from "../containers/SearchBar";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=40f0e7d626ebd843c9c96e4bcdc282b0");
            console.log(data);
            setMovies([...data.results]);
        };
        fetchMovies();
    }, []);

    return (
        <>
            <NavBar />
            <SearchBar />
            <CatagoryList />
            <Box sx={{ flexGrow: 1, padding: "20px" }}>
                <Grid justifyContent={"center"} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {movies.map((movie, index) => (
                        <Grid item xs={4} sm={4} md={3} key={index}>
                            <MovieCard movie={movie} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};
export default Home;
