// MongoDB configuration
// This file handles the MongoDB connection for task data

const require_optional = (module_name) => {
  try {
    return require(module_name);
  } catch (e) {
    return null;
  }
};

const mongoose = require_optional('mongoose');

const connectMongoDB = async () => {
  // Check if mongoose is installed
  if (!mongoose) {
    console.log('Mongoose not installed. Install with: npm install mongoose');
    return null;
  }

  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/task_management';

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✓ MongoDB connected successfully');
    return mongoose;
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectMongoDB;
