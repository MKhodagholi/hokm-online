import React from "react";

import ProfileStyled from "./ProfileStyled";

const Profile = ({ username, password }) => {
  return (
    <ProfileStyled>
      <h1>
        Hello <span>{username}</span>
      </h1>
    </ProfileStyled>
  );
};

export default Profile;
