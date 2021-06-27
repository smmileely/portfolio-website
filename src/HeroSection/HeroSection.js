import React from "react";
import styled from "styled-components";

import { COLORS } from "../constants";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <img src="/assets/HeroSectionImage.JPG" alt="My hero picture" />
      <HeroH1>Hi there, I'm Lu Yao.</HeroH1>
      <h2 style={{ fontSize: "1.5rem" }}>
        A quantity surveyor who is trying to learn new skills and venture into
        the world of codes.
      </h2>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  min-height: min(80vh, 500px);
  background-size: cover;
  background-position: bottom center;
  padding-top: 20px;
  padding-bottom: 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  /* text-shadow: 0px 0.3em 1em ${COLORS.primary}; */
  background: -webkit-linear-gradient(
    0deg,
    ${COLORS.gray[900]},
    ${COLORS.gray[100]}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeroH1 = styled.h1`
  font-size: 2.5rem;
`;

export default HeroSection;
