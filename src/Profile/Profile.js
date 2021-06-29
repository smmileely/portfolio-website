import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS, FONTS } from '../constants';

const Profile = () => {
  return (
    <ProfileContainer id='profile'>
      <ProfileContent>
        <ProfileHeader>About Me</ProfileHeader>
        <ProfileP>
          Not graduated from a computer science degree, late to the game but I'm
          glad I have started my journey with coding. I had a lot of fun playing
          with different tools and definitely struggled at the same time too.
          <br />
          <br />
          Started with python and slowly ventured into React, still improving so
          this portfolio website is my little project to showcase what I have
          learnt so far. I asipire to make digital user experience easier and
          simpler.
          <br />
          <br />
          I'am excited to fill this space with more projects that I have done!
          Stay tuned!
        </ProfileP>
      </ProfileContent>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  padding: 32px 0px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ProfileContent = styled.div`
  width: 55%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 32px;
  }
`;

const ProfileHeader = styled.div`
  align-self: center;
  padding: 12px 24px;

  background: ${COLORS.primary};
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.bold};
  font-size: ${FONTS.heading};
  line-height: 32px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

const ProfileP = styled.p`
  margin-top: 24px;

  text-align: center;
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.medium};
  font-size: ${FONTS.small};

  @media (max-width: 768px) {
    text-align: justify;
  }
`;

export default Profile;
