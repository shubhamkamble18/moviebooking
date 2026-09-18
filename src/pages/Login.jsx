import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    // Demo login
    navigate("/Login");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        {/* Logo */}

        <div className="login-logo">
          Cine<span>Book</span>
        </div>

        {/* Header */}

        <div className="login-header">
          <h1>Welcome Back</h1>

          <p>
            Login to continue booking your movie tickets.
          </p>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit} className="login-form">

          {/* Email */}

          <div className="login-input-group">

            <label>Email Address</label>

            <div className="login-input">

              <FaEnvelope />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />

            </div>

          </div>

          {/* Password */}

          <div className="login-input-group">

            <label>Password</label>

            <div className="login-input">

              <FaLock />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>

          </div>

          {/* Forgot Password */}

          <div className="login-options">

            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button
              type="button"
              className="forgot-password"
            >
              Forgot Password?
            </button>

          </div>

          {/* Error */}

          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          {/* Login Button */}

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

        {/* Register */}

        <div className="register-link">
          <span>Don't have an account?</span>

          <Link to="/register">
            Create Account
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Login;