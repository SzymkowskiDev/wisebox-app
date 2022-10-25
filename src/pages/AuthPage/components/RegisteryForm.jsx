import React from "react";

const RegisteryForm = () => {
  return (
    <>
      {" "}
      <form className='w-100 d-flex flex-column align-items-center'>
        <input
          type='text'
          placeholder='Name'
          className='border w-50 mt-5 py-3 px-4 rounded-5 type-3 auth--input'
        />
        <input
          type='text'
          placeholder='Surname'
          className='border w-50 mt-5 py-3 px-4 rounded-5 type-3 auth--input'
        />
        <input
          type='email'
          placeholder='Email'
          className='border w-50 mt-5 py-3 px-4 rounded-5 type-3 auth--input'
        />
        <input
          type='password'
          placeholder='Password'
          className='border w-50 mt-3 py-3 px-4 rounded-5 type-3 auth--input'
        />
        <input
          type='password'
          placeholder='Reapet Your Password'
          className='border w-50 mt-3 py-3 px-4 rounded-5 type-3 auth--input'
        />
      </form>
    </>
  );
};

export default RegisteryForm;
