import { Toolbar } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import tmdb from "../api/tmdb";
import CatagoryList from "../containers/CatagoryList";
import MovieList from "../containers/MovieList";
import NavBar from "../containers/NavBAr";
import PaginationStack from "../containers/PaginationStack";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [keyword, setKeyword] = useState("");
    const [genreId, setGenreId] = useState(null);
    const handleSearch = async (keyword) => {
        setKeyword(keyword);
        setGenreId(null);
    };
    const handleGenreId = async (genreId) => {
        setGenreId(genreId);
    };

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await axios.get(tmdb.fetchMovies(page));

            setTotalPage(data.total_pages);
            setMovies([...data.results]);
        };
        const fetchMovieByKeyword = async () => {
            const { data } = await axios.get(tmdb.fetchMoviesByKeyword(keyword, page));

            setTotalPage(data.total_pages);
            setMovies([...data.results]);
        };
        const fetchMovieByGenreId = async () => {
            const { data } = await axios.get(tmdb.fetchMoviesByGenreId(genreId, page));

            setTotalPage(data.total_pages);
            setMovies([...data.results]);
        };

        if (genreId === null) {
            if (keyword.length > 0) {
                fetchMovieByKeyword();
            } else {
                fetchMovies();
            }
        } else {
            fetchMovieByGenreId();
        }
    }, [page, keyword, genreId]);

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
