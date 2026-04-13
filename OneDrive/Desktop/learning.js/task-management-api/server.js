require('dotenv').config();

const app = require('./src/app');
const pool = require('./src/config/postgres');
const connectMongoDB = require('./src/config/mongo');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectMongoDB();

    if (pool) {
      console.log('PostgreSQL pool ready');
    }

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
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();