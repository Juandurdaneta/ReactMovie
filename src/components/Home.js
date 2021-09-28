import React from "react";

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Hook
import { useHomeFetch } from "../Hooks/useHomeFetch";
// Image
import noImage from "../images/no_image.jpg";

function Home() {
  
  const {state, loading, error} = useHomeFetch();

  console.log(state);

  return <div>homepage</div>;
}

export default Home;
