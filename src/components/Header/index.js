import React from "react";
import { Link } from "react-router-dom";

// images
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

// styled components
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () =>(
  <Wrapper>
    <Content>
      <Link to="/">
      <LogoImg src={RMDBLogo} alt="RMDB-Logo" />
      </Link>
      <TMDBLogoImg src={TMDBLogo} alt="TMDB Logo" />
    </Content>
  </Wrapper>
);

export default Header;
