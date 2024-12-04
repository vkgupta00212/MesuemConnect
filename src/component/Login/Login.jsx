import React, { useState } from "react"; // Import useState from React
import AboutBackground from "../Assets/about-background.png";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from '../assets/MesuemConnectLogo.png';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // Initialize state for password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const loginClick = ()=>{
    navigate("/")
  };

  const registerClick = ()=>{
    navigate("/register")
  };

  const forgotClick = ()=>{
    navigate("/forgot")
  }

 

  return (
    <div className="login-container">
      <div className="login-backgroundImage">
        <img src={AboutBackground} alt="" />
      </div>

      <div className="login-Section">
        <div className="login-logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="login-subheading">
          <h2>Welcome to Museum Connect</h2>
        </div>

        <div className="wrapinpt-containor">
          <div className="wrap-inp">
            <input 
              type="text" 
              name="userName" 
              placeholder="UserName"
              className="user-input"
            />
          </div>

          <div className="wrap-inp">
            <input
              type={showPassword ? "text" : "password"}
              name="passWord"
              placeholder="Password "
              className="password-input"
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            
          </div>

        </div>

        <div className="login-button" onClick={loginClick}>
          <button className="login-button">
            Login <FiArrowRight />
          </button>
        </div>

        <div className="login-forgot">
          <a onClick={forgotClick}>forgot password?</a>
        </div>

        <div className="login-register">
          <p>Don't have an account? <a onClick={registerClick}>register</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
