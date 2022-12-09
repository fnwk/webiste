import styled from "styled-components";
import NavLink from "../../atoms/Header/NavLink";

const links = [
  { title: "First", link: "" },
  { title: "tesda", link: "wdadw" },
];

const Nav = () => {
  return (
    <NavStyled>
      {links.map((el) => (
        <NavLink title={el.title} link={el.link} key={el.title} />
      ))}
    </NavStyled>
  );
};
export default Nav;

const NavStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;
