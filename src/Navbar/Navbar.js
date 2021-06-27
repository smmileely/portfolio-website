import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

import { COLORS, WEIGHTS, FONTS } from "../constants";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavLink
            activeClass="active"
            to="profile"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Profile
          </NavLink>
          <NavLink
            activeClass="active"
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Skills
          </NavLink>
          <NavLink
            activeClass="active"
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Experience
          </NavLink>
          <NavLink
            activeClass="active"
            to="education"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Education
          </NavLink>
          <NavLink
            activeClass="active"
            to="contacts"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contacts
          </NavLink>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  height: 80px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  border-bottom: 1px solid ${COLORS.gray[300]};

  @media (max-width: 768px) {
    border: 0;
  }
`;

const NavbarContainer = styled.div`
  padding: 20px 40px;
  max-width: 1100px;

  display: flex;
  align-items: center;
  gap: 48px;
`;

const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    position: absolute;
    top: 10px;
    right: 0;

    display: flex;

    transform: translate(-100%, 60%);
    font-size: ${FONTS.large};
    cursor: pointer;
    color: ${COLORS.gray[900]};
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 48px;

  list-style: none;
  text-align: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-size: ${FONTS.medium};
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.medium};
  cursor: pointer;

  &:hover {
    color: ${COLORS.primary};
  }
`;

export default Navbar;
