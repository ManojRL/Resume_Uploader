import React, { useState } from 'react';
import './form.css'; // Import the CSS file for styling

const FormPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dob: '',
        state: '',
        gender: '',
        jobLocation: [],
        avatar: null,
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle file change
    const handleFileChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            avatar: e.target.files[0],
        }));
    };

    // Handle job location checkbox changes
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevState) => {
            if (checked) {
                return {
                    ...prevState,
                    jobLocation: [...prevState.jobLocation, value],
                };
            } else {
                return {
                    ...prevState,
                    jobLocation: prevState.jobLocation.filter((location) => location !== value),
                };
            }
        });
    };

    // Submit form data to backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('dob', formData.dob);
        data.append('state', formData.state);
        data.append('gender', formData.gender);
        formData.jobLocation.forEach((location) => data.append('jobLocation', location));
        data.append('avatar', formData.avatar);

        try {
            const response = await fetch('http://localhost:5001/api/candidates/add', {
                method: 'POST',
                body: data,
            });

            if (response.ok) {
                alert('Candidate added successfully');
            } else {
                alert('Failed to upload resume');
            }
        } catch (error) {
            console.error('Error uploading data:', error);
            alert('An error occurred while uploading');
        }
    };

    return (
        <div className="form-page">
            <nav className="navbar">
                <div className="container">
                    <h1 className="logo">ResumeRise - Resume Uploader Platform</h1>
                    <ul className="nav-links">
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#form">Upload Resume</a></li>
                        <li><a href="#" className="sign-in-button">Sign In</a></li>
                    </ul>
                </div>
            </nav>
            <header className="hero">
                <div className="hero-content">
                    <center><h2>Update Your Resume with Ease</h2></center>
                    <strong><center><p>Upload your resume and make sure it passes ATS checks!</p></center></strong>
                    <a href="#form" className="cta-button">Upload Your Resume</a>
                </div>
            </header>
            <form className="form-container" onSubmit={handleSubmit}>
                <h2>Upload Resume</h2>
                <div className="form-group">
                    <label>Name: </label>
                    <input type="text" name="name" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="email" name="email" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Date of Birth: </label>
                    <input type="date" name="dob" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>State: </label>
                    <select name="state" onChange={handleChange} required>
                        <option value="">Select State</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhyapradesh">Madhyapradesh</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Gender: </label>
                    <input type="radio" name="gender" value="male" onChange={handleChange} required /> Male
                    <input type="radio" name="gender" value="female" onChange={handleChange} required /> Female
                </div>
                <div className="form-group">
                    <label>Preferred Job Location: </label>
                    <div className="checkbox-group">
                        <label><input type="checkbox" name="jobLocation" value="Mumbai" onChange={handleCheckboxChange} /> Mumbai</label>
                        <label><input type="checkbox" name="jobLocation" value="Bangalore" onChange={handleCheckboxChange} /> Bangalore</label>
                        <label><input type="checkbox" name="jobLocation" value="Chennai" onChange={handleCheckboxChange} /> Chennai</label>
                        <label><input type="checkbox" name="jobLocation" value="Kolkata" onChange={handleCheckboxChange} /> Kolkata</label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Upload Resume: </label>
                    <input type="file" name="avatar" onChange={handleFileChange} required />
                </div>
                <button className="submit-button" type="submit">Upload Resume</button>
            </form>
            <section id="about" className="about-section">
                <div className="container">
                    <h2><strong>About Us</strong></h2>
                    <p>At our core, we are committed to empowering job seekers to showcase the best version of themselves to potential employers. In today’s competitive job market, a standout resume is crucial, and our resume uploading service is designed to help you achieve just that. We understand that many companies use Applicant Tracking Systems (ATS) to filter resumes, which is why we meticulously ensure that your resume meets all ATS requirements. This means optimizing formatting, keywords, and structure, so that your qualifications shine through and capture the attention of hiring managers.

Our platform not only assists you in crafting a professional resume but also guides you through the nuances of what employers are looking for. By utilizing our service, you can confidently submit a resume that highlights your skills and experience while adhering to industry standards. We believe that everyone deserves the opportunity to land their dream job, and we are here to support you every step of the way, making your job search journey as smooth and successful as possible. Let us help you make a lasting impression and take the next step toward your career goals.</p>
                </div>
            </section>
        </div>
    );
};

export default FormPage;
