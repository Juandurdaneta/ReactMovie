import react from "react";
// Styles
import { Wrapper } from "./Button.styles";

const Button = ({ text, callback }) => (
  <Wrapper onClick={callback} type="button">
    {text}
  </Wrapper>
);

export default Button;