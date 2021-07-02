import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';

import { WEIGHTS, FONTS } from '../constants';

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavLink
            activeClass='active'
            to='profile'
            smooth={true}
            duration={500}
            exact='true'
          >
            Profile
          </NavLink>
          <NavLink
            activeClass='active'
            to='skills'
            smooth={true}
            duration={500}
            exact='true'
          >
            Skills
          </NavLink>
          <NavLink
            activeClass='active'
            to='experience'
            smooth={true}
            duration={500}
            exact='true'
          >
            Experience
          </NavLink>
          <NavLink
            activeClass='active'
            to='education'
            smooth={true}
            duration={500}
            exact='true'
          >
            Education
          </NavLink>
          <NavLink
            activeClass='active'
            to='contacts'
            smooth={true}
            duration={500}
            exact='true'
          >
            Contacts
          </NavLink>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  /* border-bottom: 1px solid var(--color-gray-300); */
  background: var(--color-pink-100);

  @media (max-width: 768px) {
    background: var(--color-white);
  }
`;

const NavbarContainer = styled.div`
  padding: 36px 40px;
  max-width: 1100px;

  display: flex;
  align-items: center;
  gap: 48px;

  @media (max-width: 768px) {
    padding: 20px;

    background: var(--color-white);
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    position: absolute;
    top: 10px;
    right: 0px;

    display: flex;

    transform: translate(-100%, 60%);
    font-size: ${FONTS.large};
    cursor: pointer;
    color: var(--color-gray-900);
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
  font-size: ${FONTS.small};
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  cursor: pointer;

  &:hover {
    color: var(--color-pink-500);
  }
`;

export default Navbar;
