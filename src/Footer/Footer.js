import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../constants";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialMedia>
          <SocialMediaWrap>
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
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: ${COLORS.gray[100]};
`;

const FooterWrapper = styled.div`
  height: 400px;
  padding: 48px 24px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  max-width: 1100px;
  margin: 0 auto;
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100% auto;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 830px) {
    flex-direction: column;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;

const SocialIconLink = styled.a`
  color: ${COLORS.gray[900]};
  font-size: 24px;
`;

export default Footer;
