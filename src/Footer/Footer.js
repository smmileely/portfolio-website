import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import { COLORS, FONTS } from '../constants';

const Footer = () => {
  return (
    <FooterContainer id='contacts'>
      <SocialContainer>
        <SocialIconsWrapper>
          <SocialIconLink
            href='https://www.linkedin.com/in/wengluyao/'
            target='_blank'
            aria-label='Linkedin'
          >
            <SocialIcon>
              <FaLinkedin />
            </SocialIcon>
            <SocialLink>https://www.linkedin.com/in/wengluyao</SocialLink>
          </SocialIconLink>
          <SocialIconLink
            href='https://github.com/smmileely'
            target='_blank'
            aria-label='Github'
          >
            <SocialIcon>
              <FaGithub />
            </SocialIcon>
            <SocialLink>https://github.com/smmileely</SocialLink>
          </SocialIconLink>
          <SocialIconLink
            href='mailto:wengluyao0127@gmail.com'
            target='_blank'
            aria-label='Envelope'
          >
            <SocialIcon>
              <FaEnvelope />
            </SocialIcon>
            <SocialLink>wengluyao0127@gmail.com</SocialLink>
          </SocialIconLink>
        </SocialIconsWrapper>
      </SocialContainer>
      <WebsiteRights>© {new Date().getFullYear()} - Weng Lu Yao</WebsiteRights>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: relative;
  padding: 60px 20px;

  background: ${COLORS.secondary};
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

const SocialIconLink = styled.a`
  display: flex;
  gap: 10px;

  width: fit-content;

  color: ${COLORS.gray[900]};
  font-size: ${FONTS.small};
  text-decoration: none;

  &:hover {
    color: ${COLORS.primary};
  }
`;

const SocialIcon = styled.div`
  font-size: ${FONTS.medium};

  @media (max-width: 768px) {
    font-size: ${FONTS.large};
  }
`;

const SocialLink = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

const WebsiteRights = styled.small`
  position: absolute;
  bottom: 20px;
  left: 20px;

  color: ${COLORS.gray[900]};
  font-size: ${FONTS.small};
`;

export default Footer;
