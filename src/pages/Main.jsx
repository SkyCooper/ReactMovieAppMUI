import axios from "axios";
import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import MovieCard from "../components/MovieCard";
import { v1 as uuid } from "uuid";
import { useAuthContext } from "../context/AuthContext";
import Grid from "@mui/material/Grid";

const Main = () => {
  const { movies, setMovies } = useAuthContext();
  const apiKey = "f9069354781d4737bf67d31039990880";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
  const getMovie = async () => {
    try {
      const { data } = await axios(url);
      setMovies(data.results);
    } catch (error) {
      console.log("API doesn't work");
    }
  };
  console.log(movies);

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="outlined" startIcon={<SearchIcon />}>
          Search
        </Button>
      </div>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {movies.map((movie) => (
          <MovieCard key={uuid()} {...movie} />
        ))}
      </Grid>
    </>
  );
};

export default Main;
