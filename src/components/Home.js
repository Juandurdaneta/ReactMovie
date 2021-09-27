import React, { useState } from "react";
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Hook

// Image
import noImage from "../images/no_image.jpg";

function Home() {
  const [state, setState] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  return <div>Home page</div>;
}

export default Home;
