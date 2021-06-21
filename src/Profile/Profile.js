import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../constants";

const Profile = () => {
  return (
    <ProfileContainer id="profile">
      <ProfileContent>
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
          I'am excited to fill this space with more projects that I have done!
          Stay tuned!
        </ProfileP>
      </ProfileContent>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  padding: 50px;
  background: white;
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
`;

const ProfileP = styled.p`
  margin-top: 24px;
  color: ${COLORS.gray[500]};
  font-weight: ${WEIGHTS.medium};
`;

export default Profile;
