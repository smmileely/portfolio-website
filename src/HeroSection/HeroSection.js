import React from "react";
import styled from "styled-components";
import HeroSectionImage from "../images/HeroSectionImage.JPG";
import { COLORS, WEIGHTS } from "../constants";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <img src={HeroSectionImage} alt="My hero pictre" />
      <HeroH1>Hi there, I'm Lu Yao.</HeroH1>
      <h2 style={{ fontSize: "1.5rem" }}>
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
  /* color: ${COLORS.primary}; */
  background-size: cover;
  background-position: bottom center;
  min-height: min(80vh, 500px);
`;

const HeroH1 = styled.h1`
  font-size: 2.5rem;
  padding-top: 26px;
`;

export default HeroSection;
