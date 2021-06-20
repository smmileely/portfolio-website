import React from 'react';
import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../constants';

const Skills = () => {
  return (
    <SkillContainer id='skills'>
      <SkillContent>
        <SkillHeader>My skills</SkillHeader>
        <SkillP>
          Through my journey of exploring, I've gained a solid understanding of
          web development concepts, and have dedicated my free time to solidify
          these concepts.
        </SkillP>
        <SkillListWrapper>
          <SkillList>CSS</SkillList>
          <SkillList>JavaScript</SkillList>
          <SkillList>HTML</SkillList>
          <SkillList>React</SkillList>
          <SkillList>Git</SkillList>
          <SkillList>Styled-Components</SkillList>
        </SkillListWrapper>
      </SkillContent>
    </SkillContainer>
  );
};

const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* height: auto;
  padding: 50px;
  background: white; */
  border: solid black;
`;

const SkillContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  align-items: center;
`;

const SkillHeader = styled.div`
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.bold};
  font-size: 32px;
  line-height: 32px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  align-self: center;
`;

const SkillP = styled.p`
  margin-top: 24px;
  /* display: flex; */
  color: ${COLORS.gray[500]};
  font-weight: ${WEIGHTS.medium};
`;

const SkillListWrapper = styled.ul`
  margin-top: 24px;
  text-align: justify;
  list-style: square;
  display: flex;
  gap: 80px;
`;

const SkillList = styled.li`
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.normal};
  font-size: 16px;
`;

export default Skills;
