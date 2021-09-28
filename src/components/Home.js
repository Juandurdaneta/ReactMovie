import React from "react";
// Component 
import HeroImage from "./HeroImage"
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Hook
import { useHomeFetch } from "../Hooks/useHomeFetch";
// Image
import noImage from "../images/no_image.jpg";

function Home() {
  
  const {state, loading, error} = useHomeFetch();


  return (
    <>
      
      {state.results[0] &&
      <HeroImage 
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_title}
        text={state.results[0].overview}
      />
      }

    </>
  );
}

export default Home;
