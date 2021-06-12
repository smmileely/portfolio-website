import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../constants";
import { FaTimes, FaBars } from "react-icons/fa";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarLink to="home" onClick={toggle}>
          Home
        </SidebarLink>
        <SidebarLink to="profile" onClick={toggle}>
          Profile
        </SidebarLink>
        <SidebarLink to="skills" onClick={toggle}>
          Skills
        </SidebarLink>
        <SidebarLink to="experience" onClick={toggle}>
          Experience
        </SidebarLink>
        <SidebarLink to="education" onClick={toggle}>
          Education
        </SidebarLink>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  width: 100%;
  height: 100%;
  display: none;

  @media;
`;

const Icon = styled(FaBars)`
  color: ${COLORS.secondary};
`;

const CloseIcon = styled(FaTimes)`
  color: ${COLORS.secondary};
`;

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SidebarLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.secondary};
  font-weight: ${WEIGHTS.medium};

  &:hover {
    text-decoration: revert;
  }
`;

export default Sidebar;
