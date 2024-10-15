import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'

function RegisterLogin() {
  const [email,setemail]=useState('');

  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the email and password to the backend login route
      const response = await axios.post('http://localhost:8000/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const userData = jwtDecode(response.data.accessToken);
        localStorage.setItem('name', userData.name);
        localStorage.setItem('email', userData.email);
        localStorage.setItem('user_id', userData.user_id);
        localStorage.setItem('mobile', userData.mobile);

        // Redirect to home page after successful login
        navigate('/');
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setErrorMessage('email not found. Redirecting to signup...');
          // Redirect to signup page after a delay
          setTimeout(() => navigate('/createaccount'), 2000);
        } else if (error.response.status === 401) {
          setErrorMessage('Wrong password.');
        } else {
          setErrorMessage('An error occurred while logging in.');
        }
      } else if (error.request) {
        setErrorMessage('Network error. Please try again later.');
      } else {
        setErrorMessage('An unexpected error occurred.');
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.logo}>PRICE PEEK</h1>
        <input
          type="text"
          placeholder="What do you want to Search & compare?"
          style={styles.searchBar}
        />
        <div style={styles.helpLogin}>
          <span style={styles.help}>Help</span>
          <span style={styles.loginSignup}>Login</span>
        </div>
      </div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Login</h2>
        <p style={styles.subtitle}>We will send an SMS to verify</p>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.continueButton}>Continue</button>
        <button type="button" class="btn btn-outline-primary" normal>
          <Link to="/createaccount">Sign UP</Link>
        </button>
        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
        <p style={styles.orText}>Or continue with social account</p>
        <button type="button" style={styles.googleButton}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google"
            style={styles.googleLogo}
          />
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: '10px',
    color: 'white',
  },
  logo: {
    fontSize: '24px',
    color: '#000000',
  },
  searchBar: {
    padding: '8px',
    width: '50%',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  helpLogin: {
    display: 'flex',
    alignItems: 'center',
  },
  help: {
    marginRight: '15px',
  },
  loginSignup: {
    borderLeft: '1px solid white',
    paddingLeft: '15px',
  },
  form: {
    backgroundColor: '#FAF5F0',
    margin: '50px auto',
    padding: '40px',
    width: '300px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '14px',
    marginBottom: '20px',
    color: '#888',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  continueButton: {
    backgroundColor: '#FFA500',
    color: 'white',
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    marginBottom: '20px',
  },
  orText: {
    marginBottom: '10px',
    color: '#888',
  },
  googleButton: {
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    cursor: 'pointer',
    width: '100%',
  },
  googleLogo: {
    width: '20px',
    height: '20px',
  },
  errorMessage: {
    color: 'red',
    marginBottom: '20px',
  },
};

export default RegisterLogin;
