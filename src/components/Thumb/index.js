import React from "react";
import { Link } from "react-router-dom";
//Styles
import { Image } from "./Thumb.style";

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="Movie thumbnail" />
      </Link>
    ) : (
      <Image src={image} alt="Movie thumbnail" />
    )}
  </div>
);

export default Thumb;
