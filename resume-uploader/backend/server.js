const express = require('express');
const path = require('path');
const connectDB = require('./db');
const dotenv = require('dotenv');
const cors = require('cors');
const candidateRoutes = require('./candidateRoutes');

// Load environment variables
dotenv.config({ path: 'mongodb.env' });

// Connect to MongoDB Atlas
connectDB();

const app = express();

// Enable CORS to allow frontend requests from localhost:3000
app.use(cors({
    origin: 'http://localhost:3000', // Only allow requests from the frontend origin
}));

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Candidate routes for adding and managing candidates
app.use('/api/candidates', candidateRoutes);

// Start the server on port 5001
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
