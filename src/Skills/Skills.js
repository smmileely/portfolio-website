import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../constants";

const Skills = () => {
  return (
    <SkillContainer id="skills">
      <SkillItems>
        I am a Quantity Surveyor who is currently persuing
      </SkillItems>
    </SkillContainer>
  );
};

const SkillContainer = styled.div`
  height: 500px;
  padding: 50px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillItems = styled.p`
  color: ${COLORS.secondary};
  font-weight: ${WEIGHTS.medium};
`;

export default Skills;
