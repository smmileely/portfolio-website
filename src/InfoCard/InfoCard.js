import React from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS, FONTS } from "../constants";

const InfoCard = ({ header, data }) => {
  return (
    <InfoWrapper>
      <InfoHeader>{header}</InfoHeader>
      {data.map((item, i) => (
        <InfoContentWrapper key={i} id={item.id}>
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
  width: 55%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const InfoHeader = styled.div`
  align-self: center;

  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.bold};
  font-size: ${FONTS.xlarge};
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
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  font-size: ${FONTS.medium};
`;

const CompanyDateWrapper = styled.div`
  padding: 20px 0px;

  display: flex;
  justify-content: space-between;

  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.normal};
  font-size: ${FONTS.small};
`;

const DescriptionWrapper = styled.ul`
  text-align: justify;
  list-style: circle;
`;

const Description = styled.li`
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.normal};
  font-size: ${FONTS.small};

  ::marker {
    color: ${COLORS.primary};
    font-size: ${FONTS.medium};
  }
`;

export default InfoCard;

//          {item.modules ? (
//             <ModuleWrapper> items.modules.map() </ModuleWrapper>
//           ) : null}

//if have diff style as experience can do this way
