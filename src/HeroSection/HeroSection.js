import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>Hello</HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  background-image: url("../images/HeroSectionImage.JPG");
  background-size: cover;
  background-position: bottom center;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1; //for other components in Herosection
`;

const HeroContent = styled.div`
  display: flex;
`;

export default HeroSection;
