import React from "react";
import sideImg from "../../../assets/authpageleftside.png";

const LeftSidePanel = ({ handleLogin, handleRegistery }) => {
  return (
    <div
      className='auth--hero w-100 h-100 d-flex flex-column align-items-end justify-content-center'
      style={{ backgroundImage: `url(${sideImg})` }}
    >
      <button
        className='auth--link auth--link_active d-flex type-2 align-items-center justify-content-center'
        onClick={handleLogin}
      >
        Log In
      </button>
      <button
        className='auth--link d-flex type-2 align-items-center justify-content-center'
        onClick={handleRegistery}
      >
        Sign Up
      </button>
    </div>
  );
};

export default LeftSidePanel;
