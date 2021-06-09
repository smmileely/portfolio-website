import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../constants";

const InfoCard = ({ header, lead, company, date }) => {
  return (
    <InfoWrapper>
      <InfoHeader>{header}</InfoHeader>
      <Lead>{lead}</Lead>
      <CompanyDateWrapper>
        <span>{company}</span>
        <span>{date}</span>
      </CompanyDateWrapper>
      {/*<DescriptionWrapper> 
        <Description>
          Managed a portfolio of construction developments (Residential/
          Commercial)
        </Description>
        <Description>
          Carried out post-contract administration from contract documentation,
          valuations and variations to ensure the timely delivery of the project
          and within the projected budget.
        </Description>
        <Description>
          Prepared and presented cost plan to facilitate and fulfil client’s
          requirement within the agreed budget.
        </Description>
        <Description>
          Cultivate strong ties with contractors and clients to negotiate any
          price differences swiftly and amicably.
        </Description>
        <Description>
          Responsible for conducting in-house trainings for CostX to more than
          50 Quantity Surveyors improving their productivity by 20% through
          equipping them with new technical skills that are in line with
          industry standards.
        </Description>
          </DescriptionWrapper> */}
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 800px;
  padding: 32px;
  background: black;
  width: 50%;
`;

const InfoHeader = styled.div`
  color: ${COLORS.primary};
  font-weight: ${WEIGHTS.bold};
  font-size: 32px;
  line-height: 32px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  align-self: center;
`;

const Lead = styled.div`
  margin-top: 20px;
  color: ${COLORS.primary};
  font-weight: ${WEIGHTS.medium};
  font-size: 20px;
`;

const CompanyDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  color: ${COLORS.primary};
  font-weight: ${WEIGHTS.normal};
  font-size: 16px;
`;

const DescriptionWrapper = styled.div`
  text-align: justify;
`;

const Description = styled.li`
  color: ${COLORS.primary};
  font-weight: ${WEIGHTS.normal};
  font-size: 16px;
`;

export default InfoCard;
