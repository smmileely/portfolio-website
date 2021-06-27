import React from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS } from "../constants";

const Skills = ({ header, data }) => {
  return (
    <SkillContainer id="skills">
      {data.map((item, i) => (
        <SkillContent key={i}>
          <SkillHeader>{header}</SkillHeader>
          <SkillP>{item.description}</SkillP>
          <SkillListWrapper>
            {item.skills.map((skill, i) => (
              <SkillList key={i}>{skill}</SkillList>
            ))}
          </SkillListWrapper>
        </SkillContent>
      ))}
    </SkillContainer>
  );
};

const SkillContainer = styled.div`
  padding: 50px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const SkillContent = styled.div`
  width: 55%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillHeader = styled.div`
  align-self: center;

  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.bold};
  font-size: 32px;
  line-height: 32px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

const SkillP = styled.p`
  margin-top: 24px;

  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.medium};
`;

const SkillListWrapper = styled.ul`
  margin-top: 24px;

  display: flex;
  gap: 80px;

  text-align: justify;
  list-style: circle;
`;

const SkillList = styled.li`
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.normal};
  font-size: 16px;

  ::marker {
    color: ${COLORS.primary};
    font-size: 1.2rem;
  }
`;

export default Skills;
