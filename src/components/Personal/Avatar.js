import React from 'react'
import NormalImg from "../common/NormalImg";
import AvatarImg from "../../assets/images/avatar_hat.jpg";

const Avatar = () => {
  return (
    <div className="pavatar-container">
      <NormalImg src={AvatarImg} alt={"Avatar"} />
      <div className="overlay-text">
        <h2>Jane Doe</h2>
      </div>
    </div>
  );
};

export default Avatar
