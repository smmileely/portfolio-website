import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Profile from "./Profile";
import Skills from "./Skills";
import InfoCard from "./InfoCard";
import Footer from "./Footer";
import { ExperienceData, EducationData, SkillsData } from "./data";
import { FiArrowUpCircle } from "react-icons/fi";
import { animateScroll as scroll } from "react-scroll";
import { COLORS } from "./constants";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Wrapper>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <MiddleSection>
        <HeroSection />
        <Profile />
        <Skills header="My Skills" data={SkillsData} />
        <ContentWrapper>
          <InfoCard header="Experience" data={ExperienceData} />
          <InfoCard header="Education" data={EducationData} />
        </ContentWrapper>
      </MiddleSection>
      <ScrollToTop onClick={toggleHome} />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ScrollToTop = styled(FiArrowUpCircle)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: ${COLORS.gray[900]};
  font-size: 42px;
  cursor: pointer;

  &:hover {
    color: ${COLORS.gray[700]};
  }

  &:active {
    color: ${COLORS.primary};
  }
`;

export default App;
