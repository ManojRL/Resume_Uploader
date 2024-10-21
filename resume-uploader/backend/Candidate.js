const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema({
    name: String,
    email: String,
    dob: Date,
    state: String,
    gender: String,
    jobLocation: [String],
    avatar: String, // Path to the uploaded resume
});

module.exports = mongoose.model('Candidate', candidateSchema);
