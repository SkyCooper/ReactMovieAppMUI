import axios from "axios";
import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import MovieCard from "../components/MovieCard";
import { v1 as uuid } from "uuid";
import { useAuthContext } from "../context/AuthContext";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Main = () => {
  const {
    movies,
    setMovies,
    searchText,
    setSearchText,
    Loggedin,
    setLoggedin,
  } = useAuthContext();
  const apiKey = "f9069354781d4737bf67d31039990880";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}`;
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

  const searchMovie = async () => {
    if (!searchText) {
      alert("Enter movie");
    } else {
      if (!Loggedin) {
        alert("Please Login");
      } else {
        try {
          const { data } = await axios(searchUrl);
          setMovies(data.results);
          setSearchText("");
        } catch (error) {
          console.log("Search API dont work");
        }
      }
    }
  };

  console.log(searchText);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#eee",
          display: "flex",
          justifyContent: "center",
          paddingY: "1rem",
          flexGrow: 1,
          gap: 4,
        }}
      >
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          sx={{ marginX: "1rem" }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          color="success"
          autoFocus
        />
        <Button
          variant="contained"
          startIcon={<SearchIcon />}
          onClick={searchMovie}
          color="success"
        >
          Search
        </Button>
      </Box>
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          mt={4}
        >
          {movies.map((movie) => (
            <MovieCard key={uuid()} {...movie} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Main;
