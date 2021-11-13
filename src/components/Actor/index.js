import  React from "react";
// styles
import { Image, Wrapper } from "./Actor.styles";



const Actor = ({name, character, imageUrl}) => (
   <Wrapper>
       <Image src={imageUrl} alt="Actor-thumb"/>
       <h3>{name}</h3>
       <p>{character}</p>
   </Wrapper>
)

export default Actor;