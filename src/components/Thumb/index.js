import React from "react";
//Styles
import { Image } from "./Thumb.style";

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    <Image src={image} alt="Movie thumbnail" />
  </div>
);

export default Thumb;
