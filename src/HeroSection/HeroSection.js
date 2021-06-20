import React from 'react';
import styled from 'styled-components';
import HeroSectionImage from '../images/HeroSectionImage.JPG';
import { COLORS, WEIGHTS } from '../constants';

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <img src={HeroSectionImage} alt='My hero picture' />
      <h1>Hi there, I'm Lu Yao.</h1>
      <h2>
        A quantity surveyor who is trying to learn new skills and venture into
        the world of codes.
      </h2>
    </HeroContainer>

    // <HeroContainer id='home'>
    //   <HeroBg>
    //     <ImgBg src={HeroSectionImage} />
    //   </HeroBg>
    //   <HeroContent>
    //     <HeroH1>Hi there, I'm Lu Yao.</HeroH1>
    //     <HeroP>
    //       A quantity surveyor who is trying to learn new skills and venture into
    //       the world of codes.
    //     </HeroP>
    //   </HeroContent>
    // </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-shadow: 0px 0.3em 1em hsl(295deg 100% 10%);
  background-size: cover;
  background-position: bottom center;
  min-height: min(80vh, 500px);
`;

// const HeroContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   /* padding: 0 30px; */
//   height: 400px;
//   /* position: relative; */
//   z-index: 1;
//   border: solid black;

//   /* :before {
//     content: "";
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     background: linear-gradient(
//         180deg,
//         rgba(0, 0, 0, 0.2) 0%,
//         rgba(0, 0, 0, 0.6) 100%
//       ),
//       linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
//     z-index: 2;
//   } */
// `;

const HeroBg = styled.div`
  /* position: absolute; */
  /* top: 0;
  right: 0;
  bottom: 0;
  left: 0; */
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
`;

const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  /* -o-object-fit: cover; */
  /* object-fit: cover; */
`;

const HeroContent = styled.div`
  display: flex;
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  flex-direction: column;
  align-items: center;
`;

const HeroH1 = styled.h1`
  color: ${COLORS.white};
  font-size: 48px;
  text-align: center;

  /* @media screen and (max-width: 768 px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480 px) {
    font-size: 32px;
  } */
`;

const HeroP = styled.p`
  margin-top: 24px;
  font-size: 24px;
  max-width: 600px;
  color: ${COLORS.white};
  text-align: center;

  /* @media screen and (max-width: 768 px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480 px) {
    font-size: 18px;
  } */
`;

// const HeroContent = styled.div`
//   display: flex;
// `;

export default HeroSection;
