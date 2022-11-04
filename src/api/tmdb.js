const tmdb_key = process.env.REACT_APP_TMDB_KEY;
const tmdb_image = "https://image.tmdb.org/t/p/w500/";

const tmdb = {
    fetchGenres: () => `${process.env.REACT_APP_TMDB_URL}genre/movie/list?api_key=${tmdb_key}`,
    fetchMovies: (page) => `${process.env.REACT_APP_TMDB_URL}movie/popular?api_key=${tmdb_key}&page=${page}`,
    fetchMoviesByKeyword: (keyword, page) => `${process.env.REACT_APP_TMDB_URL}search/movie?api_key=${tmdb_key}&query=${keyword}&page=${page}`,
    fetchMoviesByGenreId: (genreId, page) => `${process.env.REACT_APP_TMDB_URL}discover/movie?api_key=${tmdb_key}&with_genres=${genreId}&page=${page}`,
};

export default tmdb;
export { tmdb_image };
