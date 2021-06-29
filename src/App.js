import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiArrowUpCircle } from 'react-icons/fi';
import { animateScroll as scroll } from 'react-scroll';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Profile from './Profile';
import Skills from './Skills';
import InfoCard from './InfoCard';
import Footer from './Footer';
import { ExperienceData, EducationData, SkillsData } from './data';

import { COLORS, FONTS } from './constants';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [revealScroll, setRevealScroll] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 200) {
        setRevealScroll(true);
      } else {
        setRevealScroll(false);
      }
    };
  }, []);

  return (
    <Wrapper>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <MiddleSection>
        <HeroSection />
        <Profile />
        <Skills header='My Skills' data={SkillsData} />
        <ContentWrapper>
          <InfoCard header='Experience' data={ExperienceData} />
          <InfoCard header='Education' data={EducationData} />
        </ContentWrapper>
      </MiddleSection>
      <Footer />
      <ScrollToTop out={revealScroll ? 1 : 0} onClick={toggleHome} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const fadeIn = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: translateY(0px);
    opacity: 1;
  }

  to {
    transform: translateY(50px);
    opacity: 0;
  }
`;

const ScrollToTop = styled(FiArrowUpCircle)`
  position: fixed;
  bottom: 20px;
  right: 20px;

  color: ${COLORS.gray[700]};
  font-size: ${FONTS.title};
  cursor: pointer;

  /* Animation */
  visibility: ${(props) => (props.out ? 'visible' : 'hidden')};
  animation: ${(props) => (props.out ? fadeIn : fadeOut)} 1s ease;
  transition: visibility 1s ease;

  &:hover {
    color: ${COLORS.bulletColor};
  }
`;

export default App;
