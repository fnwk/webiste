import Link from "next/link";
import styled from "styled-components";

interface Props {
  title: string;
  link: string;
}

const NavLink = ({ title, link }: Props) => {
  return (
    <NavLinkStyle>
      <Link href={`/${link}`}>{title}</Link>
    </NavLinkStyle>
  );
};

const NavLinkStyle = styled.li`
  a {
    color: white;
    text-decoration: none;
    font-size: 22px;
    font-family: "Bebas Neue";
  }
`;

export default NavLink;
