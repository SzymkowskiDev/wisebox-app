import React from "react";
import "../../../styles/typography.scss";
import "../../../styles/AuthPage.scss";
const LogingForm = () => {
  return (
    <>
      <form className='w-100 d-flex flex-column align-items-center'>
        <input
          type='email'
          placeholder='Enter Your Email'
          className='border w-50 mt-5 py-3 px-4 rounded-5 type-3 auth--input'
        />
        <input
          type='password'
          placeholder='Enter Your Password'
          className='border w-50 mt-3 py-3 px-4 rounded-5 type-3 auth--input'
        />
      </form>
      <button className='w-50 py-3 px-4 rounded-5 type-3 m-4 auth--btn'>
        Log In
      </button>
    </>
  );
};

export default LogingForm;
