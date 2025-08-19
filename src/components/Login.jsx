import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      navigate('/');
    } else {
      alert('Please fill in both fields');
    }
  };

  const handleGmailLogin = () => {
    alert('🚀 Gmail login integration goes here (Firebase, OAuth2)');
  };

  return (
    <div className="login-container">
      <div className="auth-card">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="login-button" type="submit">Login</button>
          <div className="login-signup-link">
            New here? <Link to="/signup">Sign up</Link>
          </div>
        </form>

        <div className="or-divider">
          <span>OR</span>
        </div>
        <button
          className="login-button gmail-button"
          onClick={handleGmailLogin}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
            alt="Gmail"
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          Login with Gmail
        </button>
      </div>
    </div>
  );
};

export default Login;
