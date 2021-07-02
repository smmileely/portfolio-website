import React from 'react';
import styled from 'styled-components';

import { WEIGHTS, FONTS } from '../constants';

const Profile = () => {
  return (
    <ProfileContainer id='profile'>
      <ProfileContent>
        <ProfileHeader>About Me</ProfileHeader>
        <ProfileP>
          Popular to contrary belief, I was not from a technical background,
          late to the game, I'm glad to have embarked on this coding journey.
          <br />
          <br />
          Navigating through this journey has its own set of twists and turns,
          ups and down. But the transition from not understanding to spontaneous
          comprehension is often accompanied by an exclamation of joy and
          satisfacton.
          <br />
          <br />
          The mission? To achieve full-stack status. The aspiration? To find
          that sweet spot which balances user interface and user experience. As
          the saying goes, UI without UX is like beauty without brains - not
          good enough.
          <br />
          <br />
          Stay with me on this journey and watch this space.
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
  padding: 12px 24px;

  align-self: center;

  background: var(--color-pink-100);
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.bold};
  font-size: ${FONTS.heading};
  line-height: 32px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

const ProfileP = styled.p`
  margin-top: 24px;

  text-align: center;
  color: var(--color-gray-700);
  font-weight: ${WEIGHTS.medium};
  font-size: ${FONTS.small};

  @media (max-width: 768px) {
    text-align: justify;
  }
`;

export default Profile;
