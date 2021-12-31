import React, {useContext} from "react";
import { Link } from "react-router-dom";

// images
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

// styled components
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

// context
import { Context } from "../../context"


const Header = () =>{

  const [user] = useContext(Context);


return (
  <Wrapper>
    <Content>
      <Link to="/">
      <LogoImg src={RMDBLogo} alt="RMDB-Logo" />
      </Link>

      {user ? (
        <span>Logged in as: {user.username}</span>
      ) 
      : (<Link to='/login'>
        <span>Login</span>
      </Link>)
      
      }

      <TMDBLogoImg src={TMDBLogo} alt="TMDB Logo" />
    </Content>
  </Wrapper>
)

};

export default Header;
