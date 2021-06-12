import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../constants";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Nav>
        <NavLink href="/home">Home</NavLink>
        <NavLink href="/profile">Profile</NavLink>
        <NavLink href="/skills">Skills</NavLink>
        <NavLink href="/experience">Experience</NavLink>
        <NavLink href="/education">Education</NavLink>
      </Nav>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  padding: 20px 40px 20px 0px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 48px;
  height: 100%;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.secondary};
  font-weight: ${WEIGHTS.medium};

  &:hover {
    text-decoration: revert;
  }
`;

export default Navbar;
