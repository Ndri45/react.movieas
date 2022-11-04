const tmdb_key = process.env.REACT_APP_TMDB_KEY;

const tmdb = {
    fetchGenres: () => `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdb_key}`,
    fetchMovies: (page) => `https://api.themoviedb.org/3/movie/popular?api_key=${tmdb_key}&page=${page}`,
    fetchMoviesByKeyword: (keyword, page) => `https://api.themoviedb.org/3/search/movie?api_key=${tmdb_key}&query=${keyword}&page=${page}`,
    fetchMoviesByGenreId: (genreId, page) => `https://api.themoviedb.org/3/discover/movie?api_key=${tmdb_key}&with_genres=${genreId}&page=${page}`,
};

export default tmdb;
