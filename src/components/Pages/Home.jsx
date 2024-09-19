import React, { useState } from 'react';
import '../Style/Home.css';


const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captcha, setCaptcha] = useState('');

  // Generate a random captcha
  const generateCaptcha = () => {
    const randomStr = Math.random().toString(36).substring(2, 8).toUpperCase();
    setCaptcha(randomStr);
  };

  // Check if captcha is correct
  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaInput !== captcha) {
      alert('Incorrect Captcha');
      generateCaptcha(); // Refresh the captcha after submission
    } else {
      alert('Login Successful');
      // Implement the login functionality here
    }
  };

  // Generate captcha when component mounts
  React.useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className="login-container">
      <div className="background-image">
        <div className="login-form">
          <h2>Login Here</h2>

          <form onSubmit={handleSubmit}>
            {/* Username */}
            <label htmlFor="username">User Name:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            {/* Password */}
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Captcha */}
            <div className="captcha-container">
              <div className="captcha">{captcha}</div>
              <button type="button" className="refresh-captcha" onClick={generateCaptcha}>
                &#x21bb;
              </button>
            </div>

            <input
              type="text"
              id="captchaInput"
              placeholder="Enter Captcha"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              required
            />

            {/* Submit Button */}
            <button type="submit" className="login-btn">Login</button>
          </form>

          <div className="other-links">
            <button className="login-btn">SAG Department Login</button>
            <button className="login-btn">PMSSS Login</button>
            <button className="register-btn">New Applicant Registration</button>
            <a href="/" className="forgot-password">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
