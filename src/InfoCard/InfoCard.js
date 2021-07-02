import React from 'react';
import styled from 'styled-components';

import { WEIGHTS, FONTS } from '../constants';

const InfoCard = ({ header, data }) => {
  return (
    <InfoWrapper id={header.toLowerCase()}>
      <InfoHeader>{header}</InfoHeader>
      {data.map((item, i) => (
        <InfoContentWrapper key={i}>
          <Lead>{item.lead}</Lead>
          <CompanyDateWrapper>
            <span>{item.company}</span>
            <span>{item.date}</span>
          </CompanyDateWrapper>
          <DescriptionWrapper>
            {item.descriptions.map((description, i) => (
              <Description key={i}>{description}</Description>
            ))}
          </DescriptionWrapper>
        </InfoContentWrapper>
      ))}
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  padding: 32px 0px;
  width: 45%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    padding: 32px;
  }
`;

const InfoHeader = styled.div`
  padding: 12px 24px;

  align-self: center;

  background: var(--color-pink-100);
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.bold};
  font-size: ${FONTS.heading};
  line-height: 32px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

const InfoContentWrapper = styled.div`
  margin: 20px 0px;

  display: flex;
  flex-direction: column;
`;

const Lead = styled.div`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  font-size: ${FONTS.medium};

  @media (max-width: 768px) {
    align-self: center;

    text-align: center;
  }
`;

const CompanyDateWrapper = styled.div`
  padding: 20px 0px;

  display: flex;
  justify-content: space-between;

  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.normal};
  font-size: ${FONTS.small};
`;

const DescriptionWrapper = styled.ul`
  text-align: justify;
  list-style: circle;

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

const Description = styled.li`
  color: var(--color-gray-700);
  font-weight: ${WEIGHTS.normal};
  font-size: ${FONTS.small};

  ::marker {
    color: var(--color-pink-500);
    font-size: ${FONTS.medium};
  }
`;

export default InfoCard;

//          {item.modules ? (
//             <ModuleWrapper> items.modules.map() </ModuleWrapper>
//           ) : null}

//if have diff style as experience can do this way
