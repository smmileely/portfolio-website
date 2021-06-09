import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Profile from "./Profile";
import InfoCard from "./InfoCard";
import { ExperienceData } from "./data";

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <MiddleSection>
        <HeroSection />
        <Profile />
        <ContentWrapper>
          <InfoCard
            header={ExperienceData.header}
            lead={ExperienceData.lead}
            company={ExperienceData.company}
            date={ExperienceData.date}
          />
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
  justify-content: center;
`;

const Footer = styled.div`
  display: flex;
`;
export default App;
