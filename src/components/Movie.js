import React from "react";
import { useParams } from "react-router";
// config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
// components
import Grid from "./Grid";
import Spinner from "./Spinner";
// hook
import { useMovieFetch } from "../Hooks/useMovieFetch";
// image
import NoImage from "../images/no_image.jpg";

const Movie = () => {

  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  console.log(movie);

  return (
    <>
      <div>Movie</div>
    </>
  );
};

export default Movie;
