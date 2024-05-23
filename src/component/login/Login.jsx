import React, { useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [mode, setMode] = useState('login');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return setMessage('Please enter email and password');
    }
    if (!validateEmail(email)) {
      return setMessage('Please enter a valid email address');
    }
    if (password.length < 6) {
      return setMessage('Password must be at least 6 characters long');
    }

    setMessage('Successfully logged in!');

    setEmail('');
    setPassword('');
    setUsername('');

    setTimeout(() => {
      navigate('/feed');
    }, 2000); // Redirect after 2 seconds
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Perform validation
    if (!username || !password) {
      return setMessage('Please enter username and password');
    }
    if (!validateEmail(email)) {
      return setMessage('Please enter a valid email address');
    }
    if (password.length < 6) {
      return setMessage('Password must be at least 6 characters long');
    }
    // Perform signup logic here
    setMessage('Successfully signed up!');

    setEmail('');
    setPassword('');
    setUsername('');
  };

  const handleSocialLogin = (provider) => {

    setMessage(`Successfully logged in with ${provider}`);

    setEmail('');
    setPassword('');
    setUsername('');

    setTimeout(() => {
      navigate('/feed');
    }, 2000); // Redirect after 2 seconds
  };

  // Email validation function
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="auth-container">
      <form className="auth-form">
        {mode === 'login' ? (
          <>
            <Link to="/" className='prev-btn'> <FaArrowLeftLong /></Link>
            <h1>Hello Again!</h1>
            <p className='info'> Sign in to your account</p>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" onClick={handleLogin}>Log In</button>
          </>
        ) : (
          <>
            <h2>Sign Up</h2>
            <div className="input-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" onClick={handleSignUp}>Sign Up</button>
          </>
        )}
      </form>
      {message && <div className="success-msg">{message}</div>}
      <div className="social-login">
        <button onClick={() => handleSocialLogin('Google')}>Log in with Google</button>
        <button onClick={() => handleSocialLogin('Facebook')}>Log in with Facebook</button>
      </div>
    </div>
  );
};

export default Login;
