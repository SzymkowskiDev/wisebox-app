import React from "react";
import "../../../styles/typography.scss";


const LogingForm = () => {
  return (
    <>
      <div className='container d-flex flex-column align-items-center  '>
        <input
          type='email'
          placeholder='Enter Your Email'
          className='border w-50 m-4 p-2 rounded-5 txt-1'
        />
        <input
          type='password'
          placeholder='Enter Your Password'
          className='border w-50 p-2 rounded-5 txt-1'
        />
      </div>
    </>
  );
};

export default LogingForm;
