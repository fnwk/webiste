import styled from "styled-components";
import NavLogo from "../atoms/Header/NavLogo";
import Nav from "../molecules/Header/Nav";

const Header = () => {
  return (
    <HeaderStyled>
      <NavLogo />
      <Nav />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.nav`
  display: flex;
  padding-block: 20px;
  flex-direction: column;
`;

export default Header;
