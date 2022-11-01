import { Box, Grid } from "@mui/material";
import MovieCard from "../components/MovieCard";

const MovieList = ({ movies }) => {
    return (
        <Box sx={{ flexGrow: 1, padding: "20px" }}>
            <Grid justifyContent={"center"} container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 10 }}>
                {movies.map((movie, index) => (
                    <Grid item xs={4} sm={1} md={1} key={index}>
                        <MovieCard movie={movie} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MovieList;
