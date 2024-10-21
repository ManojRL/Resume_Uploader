import React, { useState } from 'react';
import './SignInPage.css'; // Importing CSS for sign-in

const SignInPage = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Authentication logic here, for now we'll just log in the data
        console.log('Sign in with:', credentials);
    };

    return (
        <div className="sign-in-container">
            <h2>Sign In</h2>
            <form className="sign-in-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" onChange={handleChange} required />
                </div>
                <button type="submit" className="sign-in-button">Sign In</button>
            </form>
        </div>
    );
};

export default SignInPage;
