import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../constants";

const Profile = () => {
  return (
    <ProfileContainer id="profile">
      <ProfileItems>
        I am a Quantity Surveyor who is currently persuing
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
