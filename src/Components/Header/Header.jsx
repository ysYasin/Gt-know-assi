import React from "react";
import "./Header.css";
import profile from "../../assets/profile.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <h2>GT-KNOW</h2>
        <img src={profile} alt="" />
      </div>
    </>
  );
};

export default Header;
