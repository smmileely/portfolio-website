import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialMediaWrap>
          <WebsiteRights>
            © {new Date().getFullYear()} - Weng Lu Yao
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="https://www.linkedin.com/in/wengluyao/"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink
              href="https://github.com/smmileely"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink
              href="mailto:wengluyao0127@gmail.com"
              target="_blank"
              aria-label="Envelope"
            >
              <FaEnvelope />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </FooterWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: ${COLORS.gray[100]};
`;

const FooterWrapper = styled.div`
  height: 300px;
  padding: 48px 0px;
  display: flex;
  align-items: flex-end;
  max-width: 1100px;
  margin: 0 auto;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 40px auto 0 auto;
  gap: 700px;

  @media screen and (max-width: 830px) {
    flex-direction: column;
  }
`;

const WebsiteRights = styled.small`
  color: ${COLORS.gray[900]};
  font-size: 18px;
  margin-bottom: -4px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin-bottom: -10px;
`;

const SocialIconLink = styled.a`
  color: ${COLORS.gray[900]};
  font-size: 24px;
`;

export default Footer;
