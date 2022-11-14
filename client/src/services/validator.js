export const validateLoginForm = ({ email, password }) => {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  return isEmailValid && isPasswordValid;
};

export const validateRegisterForm = ({
  email,
  password,
  passwordConfirm,
  name,
}) => {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  const isNameValid = validateName(name);
  const isPasswordConfirmValid = validatePasswordConfirm(
    password,
    passwordConfirm
  );

  return (
    isEmailValid && isPasswordValid && isNameValid && isPasswordConfirmValid
  );
};

const validatePassword = (password) => {
  return password.length > 8;
};

const validateName = (name) => {
  return name.length > 2;
};

const validatePasswordConfirm = (password, passwordConfirm) => {
  return password === passwordConfirm;
};

const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};
