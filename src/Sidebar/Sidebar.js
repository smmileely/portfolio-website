import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

import { COLORS, WEIGHTS, FONTS } from '../constants';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='profile' onClick={toggle}>
            Profile
          </SidebarLink>
          <SidebarLink to='skills' onClick={toggle}>
            Skills
          </SidebarLink>
          <SidebarLink to='experience' onClick={toggle}>
            Experience
          </SidebarLink>
          <SidebarLink to='education' onClick={toggle}>
            Education
          </SidebarLink>
          <SidebarLink to='contacts' onClick={toggle}>
            Contacts
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside`
  display: none;

  @media (max-width: 768px) {
    position: fixed;
    z-index: 999; //above everything
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background: white;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  }
`;

const CloseIcon = styled(FaTimes)`
  color: ${COLORS.gray[900]};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;

  background: transparent;
  font-size: ${FONTS.heading};
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  background: white;
`;

const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.medium};
  font-size: ${FONTS.medium};

  &:hover {
    color: ${COLORS.bulletColor};
    transition: 0.2s ease-in-out;
  }
`;

export default Sidebar;
