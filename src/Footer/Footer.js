import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialIcons>
          <SocialIconLink
            href="https://www.linkedin.com/in/wengluyao/"
            target="_blank"
            aria-label="Linkedin"
          >
            <FaLinkedin /> https://www.linkedin.com/in/wengluyao/
          </SocialIconLink>
          <SocialIconLink
            href="https://github.com/smmileely"
            target="_blank"
            aria-label="Github"
          >
            <FaGithub /> https://github.com/smmileely
          </SocialIconLink>
          <SocialIconLink
            href="mailto:wengluyao0127@gmail.com"
            target="_blank"
            aria-label="Envelope"
          >
            <FaEnvelope /> wengluyao0127@gmail.com
          </SocialIconLink>
        </SocialIcons>
      </FooterWrapper>
      <WebsiteRights>© {new Date().getFullYear()} - Weng Lu Yao</WebsiteRights>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${COLORS.secondary};
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55%;
  height: 360px;
`;

const WebsiteRights = styled.small`
  align-self: flex-start;
  margin-bottom: 20px;
  margin-left: 20px;
  color: ${COLORS.gray[900]};
  font-size: 18px;
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SocialIconLink = styled.a`
  color: ${COLORS.gray[900]};
  font-size: 23px;

  &:hover {
    color: ${COLORS.gray[700]};
  }

  &:active {
    color: ${COLORS.primary};
  }
`;

export default Footer;
