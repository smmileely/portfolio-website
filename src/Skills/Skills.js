import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS, FONTS } from '../constants';

const Skills = ({ header, data }) => {
  return (
    <SkillContainer id='skills'>
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
  padding: 32px 0px;

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
  font-size: ${FONTS.heading};
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
  font-size: ${FONTS.small};

  ::marker {
    color: ${COLORS.primary};
    font-size: ${FONTS.medium};
  }
`;

export default Skills;
