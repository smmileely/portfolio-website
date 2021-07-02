import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import { FONTS, WEIGHTS } from '../constants';
import Pdf from '../Document/WengLuYaoCV.pdf';

const Footer = () => {
  return (
    <FooterContainer id='contacts'>
      <SocialContainer>
        <CVButton href={Pdf} target='_blank' aria-label='Download my resume'>
          Resume
        </CVButton>
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
  padding: 80px 20px;

  background: var(--color-pink-300);
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CVButton = styled.a`
  width: 180px;
  padding: 12px 24px;
  margin-bottom: 30px;

  align-self: center;

  color: var(--color-gray-900);
  background: var(--color-coral);
  font-size: ${FONTS.small};
  font-weight: ${WEIGHTS.medium};
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background: var(--color-yellow);
  }
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
  width: fit-content;

  display: flex;
  gap: 10px;

  color: var(--color-gray-700);
  font-size: ${FONTS.small};
  text-decoration: none;

  &:hover {
    color: var(--color-pink-500);
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

  color: var(--color-gray-700);
  font-size: ${FONTS.small};
`;

export default Footer;
