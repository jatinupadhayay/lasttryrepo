import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./CreateAccount.css";
import backgroundImage from './images/backgroundimage.jpg';


const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent the default form submission behavior

    const userData = { name, email, password, mobile };

    try {
        console.log("Submitting form with data:", userData);  // Debugging line

        // Replace with your actual API endpoint
        const response = await axios.post('http://localhost:8000/users', userData);

        if (response.status === 201) {
            setSuccessMessage('Account created successfully!');
            setErrorMessage('');

            // Store user data in local storage
            localStorage.setItem('user', JSON.stringify({ name, email, mobile }));

            // Clear form fields after success
            setName('');
            setEmail('');
            setPassword('');
            setMobile('');

            navigate('/components/Home');  // Navigate to home page after successful account creation
        }
    } catch (error) {
        console.error("Error creating account:", error);  // Debugging line
        setErrorMessage('An error occurred while creating the account.');
    }
};


  return (
    <div className="create-account-wrapper">
      <div className="create-account-container">

        {/* Left Section with Create Account Form */}
        <div className="signup-form-container">
          <h1 className="signup-title">Create an Account</h1>
          <p className="signup-subtitle">Fill in the details below to sign up</p>

          <form className="signup-form" onSubmit={handleSubmit}>
            {/* Username Input */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* Mobile Input */}
            <div className="form-group">
              <label htmlFor="email">Mobile</label>
              <input
                type="number"
                id="mobile"
                placeholder="Enter your mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Sign up Button */}
            <button type="submit" className="signup-button">Create Account</button>

            {/* Google Signup Button */}
            <button type="button" className="google-signup">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google Logo"
                className="google-icon"
              />
              Sign up with Google
            </button>
          </form>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <p className="login-link">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>

        {/* Right Section with Background Image */}
        <div className="signup-image-container">
          <img src={backgroundImage} alt="Signup Background" className="signup-image" />
        </div>

      </div>
    </div>
  );
};

export default CreateAccount;
