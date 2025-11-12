import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import { auth, googleProvider } from '../../utils/firebaseApp';
import { signInWithPopup } from 'firebase/auth';
import useAppStore from '../store/useAppStore';
import { ToastContainer, toast, Bounce } from 'react-toastify';
const Login = ({ setIsLoggedIn }) => {
  const loginSuccess = () => toast.success('Logging in', {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
  const logginError = () => toast.error('Error logging in', {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  })
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { user, setUser } = useAppStore();
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

  const handleGmailLogin = async () => {
    try {
      const result =await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user);
      setUser(user);
      loginSuccess();
      setIsLoggedIn(true);
      navigate('/');
    } catch (error) {
      console.log(error);
      logginError();
    }
  };
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);
  return (
    <div className="login-container">
      <ToastContainer
      
      />
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
