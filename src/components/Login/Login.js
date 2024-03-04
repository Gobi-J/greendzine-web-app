import React, { useState } from "react";
import "./Login.style.css";
import logo from "../../assets/Group 3.png";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState("Enter Email");
  const [isValidPass, setIsValidPass] = useState("Enter Password");
  const [touchedFields, setTouchedFields] = useState({
    email: false,
    password: false,
  });

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (touchedFields.email) {
      const isValidEmai =
        /^[a-z0-9][a-z0-9._]{3,}@[a-z0-9]{3,}.[a-z]{2,}(?:.[a-z]{2,})?$/.test(
          newEmail
        );
      setIsValidEmail(isValidEmai ? "" : "Invalid email address");
      if (newEmail.length < 1) setIsValidEmail("Enter Email");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const isValidPassword = newPassword.length >= 6;
    setIsValidPass(isValidPassword ? "" : "Enter atleast 6 characters");
  };

  const handleBlur = (field) => {
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [field]: true,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    if(isValidEmail.length < 1 && isValidPass.length < 1)
        navigate("/home");
    else{
        handleBlur("password")
        handleBlur("email")
    }
  }

  return (
    <div className="login">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <p># We are Electric</p>
      </div>
      <form className="login-form">
        <div className="input-fields">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => handleBlur("email")}
          />
          {touchedFields.email && (
            <p
              className="error"
              style={{ color: "red", textAlign: "left", margin: "5px 10px" }}
            >
              {isValidEmail}
            </p>
          )}
        </div>
        <div className="input-fields">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={() => handleBlur("password")}
          />
          {touchedFields.password && (
            <p
              className="error"
              style={{ color: "red", textAlign: "left", margin: "5px 10px" }}
            >
              {isValidPass}
            </p>
          )}
        </div>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        <a style={{ textDecoration: "none" }} href="#">
          Forgot password?
        </a>
      </form>
    </div>
  );
};

export default Login;
