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
    const [totalPage, setTotalPage] = useState(1);
    const [query, setQuery] = useState("");
    const [genreId, setGenreId] = useState(null);
    const handleSearch = async (query) => {
        setQuery(query);
        setGenreId(null);
    };
    const handleGenreId = async (genreId) => {
        setGenreId(genreId);
    };

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=40f0e7d626ebd843c9c96e4bcdc282b0&page=${page}`);

            setTotalPage(data.total_pages);
            setMovies([...data.results]);
        };
        const fetchMovieByKeyword = async () => {
            const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=40f0e7d626ebd843c9c96e4bcdc282b0&query=${query}&page=${page}`);

            setTotalPage(data.total_pages);
            setMovies([...data.results]);
        };
        const fetchMovieByGenreId = async () => {
            const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=40f0e7d626ebd843c9c96e4bcdc282b0&with_genres=${genreId}&page=${page}`);

            setTotalPage(data.total_pages);
            setMovies([...data.results]);
        };

        if (genreId === null) {
            if (query.length > 0) {
                fetchMovieByKeyword();
            } else {
                fetchMovies();
            }
        } else {
            fetchMovieByGenreId();
        }
    }, [page, query, genreId]);

    return (
        <>
            <NavBar handleSearch={handleSearch} />
            <CatagoryList genreId={genreId} handleGenreId={handleGenreId} />
            <Toolbar />
            <MovieList movies={movies} />
            <Toolbar />
            <PaginationStack count={Math.min(10, totalPage)} onSetPage={setPage} />
        </>
    );
};
export default Home;
