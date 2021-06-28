import React from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS, FONTS } from "../constants";

const Profile = () => {
  return (
    <ProfileContainer id="profile">
      <ProfileContent>
        <ProfileHeader>About Me</ProfileHeader>
        <ProfileP>
          Not graduated from a computer science degree, but slowly found my
          interest in coding especially during this pandemic season. I had a lot
          of fun playing with different tools and definitely struggled too.
          <br />
          <br />
          Started with python and slowly ventured into React, still improving so
          this portfolio website is my little project to showcase what I learnt
          so far.
          <br />
          <br />
          I'am excited to fill this space with more projects that I have learnt
          so far! Stay tuned!
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
`;

const ProfileHeader = styled.div`
  align-self: center;

  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.bold};
  font-size: ${FONTS.xlarge};
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
`;

export default Profile;
