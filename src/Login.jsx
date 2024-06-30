import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [jwt, setJwt] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://tl-onboarding-project-dxm7krgnwa-uc.a.run.app/login', {
        username,
        password
      });
      setJwt(response.data.token);
      localStorage.setItem('jwt', response.data.token);
      setError('');
      navigate('/dashboard'); // Redirect to dashboard
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
      {jwt && (
        <div>
          <h3>JWT:</h3>
          <p>{jwt}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
