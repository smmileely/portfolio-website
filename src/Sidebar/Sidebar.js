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
        <SidebarMenu>
          <SidebarLink href="/home" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink href="/profile" onClick={toggle}>
            Profile
          </SidebarLink>
          <SidebarLink href="/skills" onClick={toggle}>
            Skills
          </SidebarLink>
          <SidebarLink href="/experience" onClick={toggle}>
            Experience
          </SidebarLink>
          <SidebarLink href="/education" onClick={toggle}>
            Education
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside`
  display: none;

  @media (max-width: 960px) {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Icon = styled(FaBars)`
  position: absolute;
  color: ${COLORS.secondary};
  cursor: pointer;
`;

const CloseIcon = styled(FaTimes)`
  color: ${COLORS.secondary};
`;

const SidebarWrapper = styled.div`
  background: white;
`;

const SidebarMenu = styled.div`
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
    /* text-decoration: revert; */
    font-weight: ${WEIGHTS.bold};
  }
`;

export default Sidebar;
