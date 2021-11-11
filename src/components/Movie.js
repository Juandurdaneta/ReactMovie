import React from "react";
import { useParams } from "react-router";
// config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
// components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
// hook
import { useMovieFetch } from "../Hooks/useMovieFetch";
// image
import NoImage from "../images/no_image.jpg";
import MovieInfo from "./MovieInfo";

const Movie = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.title} />
      <MovieInfo movie={movie} />
    </>
  );
};

export default Movie;
