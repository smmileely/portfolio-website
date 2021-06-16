import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../constants";

const Profile = () => {
  return (
    <ProfileContainer id="profile">
      <ProfileItems>
        Not gradudated from a computer science degree, but slowly found my
        interest in coding especially during this pandemic season. Started with
        python and slowly ventured into React, still improving so this portfolio
        website is my little project to showcase what I have got. I'am excited
        to fill this site with more projects that I have done!
      </ProfileItems>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  height: 500px;
  padding: 50px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileItems = styled.p`
  color: ${COLORS.secondary};
  font-weight: ${WEIGHTS.medium};
`;

export default Profile;
