import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent></HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1; //for other components in Herosection
  background: black;
`;

const HeroContent = styled.div`
  display: flex;
`;

export default HeroSection;
