import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

const MovieDetail = () => {
  const { id } = useParams();
  const apiKey = process.env.REACT_APP_movieapiKey;
  const navigate = useNavigate();
  const [movieDetail, setMovieDetail] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [youtubeKey, setYoutubeKey] = useState("");

  const detailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  const trailerUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;
  const [value, setValue] = React.useState(3);

  const getDetails = async () => {
    try {
      const { data } = await axios(detailUrl);
      setMovieDetail(data);
    } catch (error) {}
  };
  console.log(movieDetail);

  const getMovieTrailer = async () => {
    try {
      const { data : {results} } = await axios(trailerUrl);
      setTrailer(results);
      setYoutubeKey(trailer[0].key)
    } catch (error) {}
  };

  console.log(trailer);

  useEffect(() => {
    getDetails();
    getMovieTrailer();
  }, []);
  const {
    original_title,
    overview,
    tagline,
    release_date,
    poster_path,
    vote_count,
    vote_average,
    homepage,
    popularity,
    genres,
  } = movieDetail;
  // console.log(genres[0].name);

  const imgUrl = `https://image.tmdb.org/t/p/w1280${poster_path}`;

  return (
    <>
      <Container>
        <Typography variant="h4" color="error" align="center" mt={4}>
          {original_title}
        </Typography>
        <div>
          <iframe
            width="940"
            height="538"
            src={`https://www.youtube.com/embed/${youtubeKey}`}
            title={original_title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <Card sx={{ maxWidth: "50%", margin: "1rem auto" }}>
            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/w1280${poster_path}`}
              alt="green iguana"
              sx={{ objectFit: "contain", maxHeight: "600px" }}
            />
            {/* {genres.map((item, i) => {
              return (
                <Typography key={i}>
                  {item.name}
                </Typography>
              );
            })} */}
            <Rating
              name="simple-controlled"
              sx={{ display: "block" }}
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <CardContent>
              <hr />
              <Typography gutterBottom variant="h5" component="div">
                {original_title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {tagline}
              </Typography>
              <hr />
              <Typography variant="h5" component="div">
                Overview
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {overview}
              </Typography>
              <hr />
              <Typography variant="body2">Popularity: {popularity}</Typography>
              <hr />
              <Typography variant="body2">
                Relase Date: {release_date}
              </Typography>
              <hr />
              <Typography variant="body2">Rate: {vote_average}</Typography>
              <hr />
              <Typography variant="body2">Total Vote: {vote_count}</Typography>
              <hr />
              <Typography variant="body2">
                Home Page: <a href={homepage}>{homepage}</a>{" "}
              </Typography>
              <hr />
            </CardContent>
            <CardActions sx={{ textAlign: "center" }}>
              <Button size="small" onClick={() => navigate(-1)}>
                Go Back
              </Button>
            </CardActions>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default MovieDetail;
