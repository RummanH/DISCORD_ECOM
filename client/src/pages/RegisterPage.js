import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AuthBox from "../components/AuthBox";
import RegisterPageFooter from "../components/RegisterPageFooter";
import RegisterPageForm from "../components/RegisterPageForm";
import { validateRegisterForm } from "../services/validator";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [isFormIsValid, setIsFormIsValid] = useState(false);
  const handleRegister = () => {};

  useEffect(() => {
    setIsFormIsValid(
      validateRegisterForm({ email, password, passwordConfirm, name })
    );
  }, [name, email, password, passwordConfirm]);

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterPageForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        name={name}
        setName={setName}
        passwordConfirm={passwordConfirm}
        setPasswordConfirm={setPasswordConfirm}
      />

      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormIsValid}
      />
    </AuthBox>
  );
};

export default RegisterPage;
