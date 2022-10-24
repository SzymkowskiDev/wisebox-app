import React from "react";
import LeftSidePanel from "./components/LeftSidePanel";
import "../../styles/AuthPage.scss";
import LogingForm from "./components/LogingForm";
import logo from "../../assets/logo.png";
import "../../styles/typography.scss";

const AuthPage = () => {
  return (
    <div>
      <div className='container p-0 d-flex flex-row auth--nav'>
        <LeftSidePanel className='' />
        <div className='container w-75 d-flex flex-column align-items-center justify-content-center'>
          <img src={logo} alt='wisebox' />
          <span className='header-2'>Manage your stock the way you want</span>
          <LogingForm></LogingForm>
          <button className='border w-50 p-2 rounded-5 txt-1 m-4 '>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
