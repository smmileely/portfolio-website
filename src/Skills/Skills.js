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
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
`;

const SkillContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
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
  color: ${COLORS.gray[500]};
  font-weight: ${WEIGHTS.medium};
`;

const SkillListWrapper = styled.ul`
  display: flex;
  text-align: justify;
  /* word-wrap: initial; */
  list-style: circle;
  margin-top: 24px;
  gap: 80px;
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
