import React from "react";

// images
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

// styled components
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () =>(
  <Wrapper>
    <Content>
      <LogoImg src={RMDBLogo} alt="RMDB-Logo" />
      <TMDBLogoImg src={TMDBLogo} alt="TMDB Logo" />
    </Content>
  </Wrapper>
);

export default Header;
