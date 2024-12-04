import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import AboutBackground from "../Assets/about-background.png";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please fill out your name.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Please enter a valid 10-digit mobile number.";
    if (!formData.gender) newErrors.gender = "Please select your gender.";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    if (validateForm()) {
      alert("Registration Successful!");
      navigate("/login");
    }
  };

  return (
    <div className="Register-containor">
      <div className="Register-backgroundImage">
        <img src={AboutBackground} alt="Background" />
      </div>

      <div className="Register">
        <div className="Register-subheading">
          <h2>Registration Page</h2>
        </div>

        <div className="Register-input">
          {/* Name */}
          <div className="wrap-inp">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={errors.name ? "error-input" : ""}
              placeholder="Enter your name"
            />
            {errors.name && <div className="error-box">{errors.name}</div>}
          </div>

          {/* Email */}
          <div className="wrap-inp">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? "error-input" : ""}
              placeholder="Enter your email"
            />
            {errors.email && <div className="error-box">{errors.email}</div>}
          </div>

          {/* Mobile Number */}
          <div className="wrap-inp">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="number"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className={errors.mobile ? "error-input" : ""}
              placeholder="Enter your mobile number"
            />
            {errors.mobile && <div className="error-box">{errors.mobile}</div>}
          </div>

          {/* Gender */}
          <div className="wrap-inp">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className={errors.gender ? "error-input" : ""}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <div className="error-box">{errors.gender}</div>}
          </div>

          {/* Password */}
          <div className="wrap-inp">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={errors.password ? "error-input" : ""}
              placeholder="Enter your password"
            />
            {errors.password && (
              <div className="error-box">{errors.password}</div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="wrap-inp">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={errors.confirmPassword ? "error-input" : ""}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <div className="error-box">{errors.confirmPassword}</div>
            )}
          </div>
        </div>

        <div className="Register-option">
          <button className="Register-button" onClick={handleRegister}>
            Register <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
