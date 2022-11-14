import React, { useEffect, useState } from "react";
import AuthBox from "../components/AuthBox";
import LoginPageFooter from "../components/LoginPageFooter";
import LoginPageForm from "../components/LoginPageForm";
import LoginPageHeader from "../components/LoginPageHeader";
import { validateLoginForm } from "../services/validator";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(true);
  const handleLogin = () => {
    console.log(email, password);
  };

  useEffect(() => {
    setIsFormValid(validateLoginForm({ email, password }));
  }, [email, password]);

  return (
    <div>
      <AuthBox>
        <LoginPageHeader />
        <LoginPageForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <LoginPageFooter handleLogin={handleLogin} isFormValid={isFormValid} />
      </AuthBox>
    </div>
  );
};

export default LoginPage;
