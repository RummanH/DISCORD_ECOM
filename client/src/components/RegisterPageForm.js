import React from "react";
import InputWithLabel from "./InputWithLabel";

const RegisterPageForm = (props) => {
  const {
    email,
    setEmail,
    name,
    setName,
    password,
    setPassword,
    passwordConfirm,
    setPasswordConfirm,
  } = props;
  return (
    <>
      <InputWithLabel
        value={name}
        setValue={setName}
        label="Name"
        type="text"
        placeholder="Enter Name"
      />
      <InputWithLabel
        value={email}
        setValue={setEmail}
        label="Email"
        type="email"
        placeholder="Enter e-mail address"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
      <InputWithLabel
        value={passwordConfirm}
        setValue={setPasswordConfirm}
        label="Confirm Password"
        type="password"
        placeholder="Confirm password"
      />
    </>
  );
};

export default RegisterPageForm;
