import React from "react";

const ProfilePic = ({ userName }) => {
  return <div className="profileIcon">{userName.toUpperCase()}</div>;
};

export default ProfilePic;
