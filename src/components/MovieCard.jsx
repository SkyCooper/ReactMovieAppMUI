import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import { Navigate, useNavigate } from "react-router-dom";
import NotFound from "../pages/NotFound";

export default function MovieCard({
  title,
  poster_path,
  vote_average,
  overview,
}) {
  const imgUrl = `https://image.tmdb.org/t/p/w1280${poster_path}`;
  const [value, setValue] = React.useState(3);
  const navigate = useNavigate();

  const detailMovie = async () => {
    try {
    } catch (error) {
      <Navigate to={<NotFound />} />;
    }
  };
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} onClick={() => navigate("detail")}>
      <Card sx={{ maxWidth: 345 }} onClick={detailMovie}>
        <CardActionArea>
          <CardMedia component="img" image={imgUrl} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
              <span>{vote_average}</span>
              <Rating
                name="simple-controlled"
                sx={{ display: "block" }}
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              {overview}
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
