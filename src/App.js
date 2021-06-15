import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Profile from "./Profile";
import InfoCard from "./InfoCard";
import { ExperienceData, EducationData } from "./data";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <MiddleSection>
        <HeroSection />
        <Profile />
        <ContentWrapper>
          <InfoCard header="Experience" data={ExperienceData} />
          <InfoCard header="Education" data={EducationData} />
        </ContentWrapper>
      </MiddleSection>
      <Footer>Footer</Footer>
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

const Footer = styled.div`
  display: flex;
`;

export default App;
