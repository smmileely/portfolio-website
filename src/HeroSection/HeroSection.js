import React from "react";
import styled from "styled-components";
import HeroSectionImage from "../images/HeroSectionImage.JPG";
// import { COLORS, WEIGHTS } from "../constants";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <img src={HeroSectionImage} alt="My hero pictre" />
      <h1>Hi there, I'm Lu Yao.</h1>
      <h2>
        A quantity surveyor who is trying to learn new skills and venture into
        the world of codes.
      </h2>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-shadow: 0px 0.3em 1em hsl(295deg 100% 10%);
  background-size: cover;
  background-position: bottom center;
  min-height: min(80vh, 500px);
`;

export default HeroSection;
