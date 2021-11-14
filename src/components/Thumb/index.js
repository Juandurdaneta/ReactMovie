import React from "react";
import PropTypes from "prop-types";
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

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool
}

export default Thumb;
