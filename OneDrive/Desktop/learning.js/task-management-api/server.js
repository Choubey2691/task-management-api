// Server Entry Point
// Starts the Express server and initializes database connections

require('dotenv').config();

const app = require('./src/app');
const connectPostgres = require('./src/config/postgres');
const connectMongoDB = require('./src/config/mongo');

// Get port from environment or use default
const PORT = process.env.PORT || 5000;

// Initialize database connections
const initializeConnections = async () => {
  try {
    // PostgreSQL connection
    const postgresPool = connectPostgres();
    if (postgresPool) {
      console.log('PostgreSQL pool created');
    }

    // MongoDB connection
    if (process.env.MONGODB_URI || process.env.NODE_ENV !== 'production') {
      await connectMongoDB();
    }

    return true;
  } catch (error) {
    console.error('Failed to initialize databases:', error);
    // Continue even if databases fail (for development)
    return false;
  }
};

// Start server
const startServer = async () => {
  try {
    // Initialize database connections
    await initializeConnections();

    // Start listening
    app.listen(PORT, () => {
      console.log(`
╔════════════════════════════════════════╗
║   Task Management API Server Started   ║
║   Port: ${PORT}                              ║
║   Environment: ${process.env.NODE_ENV || 'development'}           ║
╚════════════════════════════════════════╝
      `);
      console.log(`API available at: http://localhost:${PORT}`);
      console.log(`Health check: http://localhost:${PORT}/api/health`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

// Start the server
startServer();
