import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <header className="hero-banner">
                <h1>Welcome to Resume Uploader</h1>
                <p>Upload your resume to apply for your dream job!</p>
                <Link to="/upload" className="cta-button">Upload Your Resume</Link>
            </header>
            <div className="banners">
                <div className="banner">
                    <h3>Join Now</h3>
                    <p>Sign up today and access exclusive opportunities.</p>
                </div>
                <div className="banner">
                    <h3>Learn & Grow</h3>
                    <p>Get resources and insights on career building.</p>
                </div>
                <div className="banner">
                    <h3>Get Hired</h3>
                    <p>Boost your resume visibility to potential employers.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
