import React from 'react';
import styled from 'styled-components';

import { COLORS, FONTS } from '../constants';

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <HeroImage1 src='/assets/HeroSectionImage1.JPG' alt='My hero picture' />
      <HeroImage2 src='/assets/IMG_8815.JPG' alt='My hero picture' />
      <HeroH1>Hi there, I'm Lu Yao.</HeroH1>
      <HeroH2>
        A quantity surveyor who is trying to learn new skills and venture into
        the world of codes.
      </HeroH2>
      <MobileHeroH1>Hello, I'm Lu Yao.</MobileHeroH1>
      <MobileHeroH2>Front-end developer</MobileHeroH2>
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
  color: ${COLORS.bulletColor};
  /* background: -webkit-linear-gradient(
    0deg,
    ${COLORS.gray[900]},
    ${COLORS.gray[100]}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
`;

const HeroImage1 = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroImage2 = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: block;
    max-width: 100%;
    height: auto;
    margin: -64px 0px;
  }
`;

const HeroH1 = styled.h1`
  font-size: ${FONTS.title};

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroH2 = styled.h2`
  font-size: ${FONTS.medium};

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileHeroH1 = styled.h1`
  display: none;

  @media (max-width: 768px) {
    position: absolute;
    z-index: 2;
    margin: 0 auto;
    left: 14px;
    right: 0;
    top: 46%;
    max-width: 100%;

    display: block;

    text-align: left;
    font-size: ${FONTS.heading};
  }
`;

const MobileHeroH2 = styled.h1`
  display: none;

  @media (max-width: 768px) {
    position: absolute;
    z-index: 2;
    margin: 0 auto;
    left: 0;
    right: 14px;
    top: 51%;
    max-width: 100%;

    display: block;

    text-align: right;
    font-size: ${FONTS.large};
  }
`;

export default HeroSection;
