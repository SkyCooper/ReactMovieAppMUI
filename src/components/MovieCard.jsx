import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import  CardActionArea  from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";


export default function MovieCard({
  title,
  poster_path,
  vote_average,
  overview,
}) {
  const imgUrl = `https://image.tmdb.org/t/p/w1280${poster_path}`;
  return (
    <Grid item xs={12} sm={6} md={3} lg={2}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" image={imgUrl} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title} - {vote_average}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
