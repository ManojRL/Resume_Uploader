const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from 'mongodb.env'
dotenv.config({ path: 'mongodb.env' });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
