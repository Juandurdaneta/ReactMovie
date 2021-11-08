import react from "react";
import { Link } from "react-router-dom"; // allows to link back to home page
// styles
import { Wrapper, Content } from "./BreadCrumb.styles";

const BreadCrumb = ({ movieTitle }) => (

    <Wrapper>
        <Content>
            <Link to="/">
                <span>Home</span>
            </Link>
                <span>|</span>
                <span>{movieTitle}</span>
        </Content>
    </Wrapper>

)

export default BreadCrumb;