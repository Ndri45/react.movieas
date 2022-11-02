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
    const [isQuery, setIsQuery] = useState(false);
    const [query, setQuery] = useState(false);
    const handleSearch = async (query, page = 1) => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=40f0e7d626ebd843c9c96e4bcdc282b0&query=${query}&page=${page}`);

        setIsQuery(true);
        setQuery(query);
        setTotalPage(data.total_pages);
        setMovies([...data.results]);
    };

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=40f0e7d626ebd843c9c96e4bcdc282b0&page=${page}`);

            setTotalPage(data.total_pages);
            setMovies([...data.results]);
        };
        if (isQuery) {
            handleSearch(query, page);
        } else {
            fetchMovies();
        }
    }, [isQuery, page, query]);

    return (
        <>
            <NavBar handleSearch={handleSearch} />
            <CatagoryList />
            <Toolbar />
            <MovieList movies={movies} />
            <Toolbar />
            <PaginationStack count={Math.min(10, totalPage)} onSetPage={setPage} />
        </>
    );
};
export default Home;
