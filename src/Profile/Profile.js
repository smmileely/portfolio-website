import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../constants";

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
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
`;

const ProfileHeader = styled.div`
  align-self: center;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.bold};
  font-size: 32px;
  line-height: 32px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;
const ProfileP = styled.p`
  text-align: center;
  margin-top: 24px;
  color: ${COLORS.gray[500]};
  font-weight: ${WEIGHTS.medium};
`;

export default Profile;
