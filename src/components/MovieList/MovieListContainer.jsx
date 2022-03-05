import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

const MovieList = ({ movies, plots, setSelectedMovie }) => {
  console.log(plots);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justify="center">
        {movies?.map((movie, index) => (
          <Grid
            item
            xs="auto"
            onClick={() => {
              setSelectedMovie(movie.imdbID);
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <Card
              elevation={6}
              style={{
                height: 600,
                width: 300,
              }}
              className="card"
            >
              <CardMedia
                style={{ height: 450, width: 300 }}
                image={movie.Poster}
                alt={movie.Title}
                key={index}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {movie.Title}
                </Typography>
                <Typography gutterBottom variant="body1">
                  {movie.Year}
                </Typography>
                <Typography gutterBottom variant="body2"></Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieList;
