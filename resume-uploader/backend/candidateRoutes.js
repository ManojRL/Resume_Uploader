const express = require('express');
const router = express.Router();
const Candidate = require('./Candidate');
const multer = require('multer');
const path = require('path');

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Folder to store uploaded resumes
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

// Add a new candidate (POST /api/candidates/add)
router.post('/add', upload.single('avatar'), async (req, res) => {
    try {
        // Extract the data from request body
        const { name, email, dob, state, gender, jobLocation } = req.body;

        // Create a new candidate object
        const newCandidate = new Candidate({
            name,
            email,
            dob,
            state,
            gender,
            jobLocation: Array.isArray(jobLocation) ? jobLocation : [jobLocation], // Ensure it's an array
            avatar: req.file ? req.file.path : null, // Add the file path if the file exists
        });

        // Save the candidate to MongoDB
        await newCandidate.save();
        res.status(201).json(newCandidate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
