import { Toolbar } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import CatagoryList from "../containers/CatagoryList";
import MovieList from "../containers/MovieList";
import NavBar from "../containers/NavBAr";
import PaginationStack from "../containers/PaginationStack";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=40f0e7d626ebd843c9c96e4bcdc282b0&page=" + page);

            setMovies([...data.results]);
        };
        fetchMovies();
    }, [page]);

    return (
        <>
            <NavBar />
            <CatagoryList />
            <MovieList movies={movies} />
            <Toolbar />
            <PaginationStack onSetPage={setPage} />
            <Toolbar />
        </>
    );
};
export default Home;
