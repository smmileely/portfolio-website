import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../constants";

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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 32px;
  width: 55%;
`;

const InfoHeader = styled.div`
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.bold};
  font-size: 32px;
  line-height: 32px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  align-self: center;
`;

const InfoContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`;

const Lead = styled.div`
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  font-size: 20px;
`;

const CompanyDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.normal};
  font-size: 16px;
`;

const DescriptionWrapper = styled.ul`
  text-align: justify;
  list-style: square;
`;

const Description = styled.li`
  color: ${COLORS.gray[500]};
  font-weight: ${WEIGHTS.normal};
  font-size: 16px;
`;

export default InfoCard;

//          {item.modules ? (
//             <ModuleWrapper> items.modules.map() </ModuleWrapper>
//           ) : null}

//if have diff style as experience can do this way
