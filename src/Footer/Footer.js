import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import { COLORS } from "../constants";

const Footer = () => {
  return (
    <FooterContainer id="contacts">
      <FooterWrapper>
        <SocialIcons>
          <SocialIconLink
            href="https://www.linkedin.com/in/wengluyao/"
            target="_blank"
            aria-label="Linkedin"
          >
            <FaLinkedin size={20} /> https://www.linkedin.com/in/wengluyao
          </SocialIconLink>
          <SocialIconLink
            href="https://github.com/smmileely"
            target="_blank"
            aria-label="Github"
          >
            <FaGithub size={20} /> https://github.com/smmileely
          </SocialIconLink>
          <SocialIconLink
            href="mailto:wengluyao0127@gmail.com"
            target="_blank"
            aria-label="Envelope"
          >
            <FaEnvelope size={20} /> wengluyao0127@gmail.com
          </SocialIconLink>
        </SocialIcons>
      </FooterWrapper>
      <WebsiteRights>© {new Date().getFullYear()} - Weng Lu Yao</WebsiteRights>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: relative;
  padding: 60px 20px;

  background: ${COLORS.secondary};
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SocialIconLink = styled.a`
  display: flex;
  gap: 10px;

  width: fit-content;

  color: ${COLORS.gray[900]};
  font-size: 16px;
  text-decoration: none;

  &:hover {
    color: ${COLORS.primary};
  }
`;

const WebsiteRights = styled.small`
  position: absolute;
  bottom: 20px;
  left: 20px;

  color: ${COLORS.gray[900]};
  font-size: 18px;
`;

export default Footer;
