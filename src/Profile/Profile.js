import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../constants";

const Profile = () => {
  return (
    <ProfileContainer id="profile">
      <ProfileContent>
        <ProfileP>
          Not gradudated from a computer science degree, but slowly found my
          interest in coding especially during this pandemic season. I had a lot
          of fun playing with different tools and definitely struggled too.
          <br />
          <br />
          Started with python and slowly ventured into React, still improving so
          this portfolio website is my little project to showcase what I have
          got.
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
  height: auto;
  padding: 50px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  align-items: center;
`;

const ProfileP = styled.p`
  margin-top: 24px;
  display: flex;
  flex-direction: column;

  color: ${COLORS.gray[500]};
  font-weight: ${WEIGHTS.medium};
`;

export default Profile;
