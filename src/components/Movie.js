import React from "react";
import { useParams } from "react-router";
// config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
// components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";

// hook
import { useMovieFetch } from "../Hooks/useMovieFetch";
// image
import NoImage from "../images/no_image.jpg";


const Movie = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);


  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
      <Grid header='Actors'>
        {movie.actors.map(actor=>(
          <Actor 
          key={actor.credit_id}
          name={actor.name}
          imageUrl={
            actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : NoImage
          }
          character={actor.character}
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
