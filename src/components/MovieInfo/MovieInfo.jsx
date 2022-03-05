import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

const MovieInfo = (props) => {
  console.log(props.movieInfo)
  return (
    <Card sx={{ display: "flex" }} style={{ marginBottom: "15px" }} id="main" >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {props.movieInfo?.Title}
          </Typography>
          <Typography variant="subtitle1" component="div">
            <strong>Genre:</strong> {props.movieInfo?.Genre}
          </Typography>
          <Typography variant="subtitle1" component="div">
            <strong>Director:</strong> {props.movieInfo?.Director}
          </Typography>
          <Typography variant="subtitle1" component="div">
            <strong>Writer:</strong> {props.movieInfo?.Writer}
          </Typography>
          <Typography variant="subtitle1" component="div">
            <strong>Actors:</strong> {props.movieInfo?.Actors}
          </Typography>
          <Typography variant="subtitle1" component="div">
            <strong>Plot:</strong> {props.movieInfo?.Plot}
          </Typography>
        </CardContent>
        <Button
          onClick={() => props.setSelectedMovie()}
          variant="text"
          style={{
            backgroundColor: "#ff4569",
            width: 200,
            alignSelf: "center",
          }}
        >
          X
        </Button>
      </Box>
    </Card>
  );
};

export default MovieInfo;
