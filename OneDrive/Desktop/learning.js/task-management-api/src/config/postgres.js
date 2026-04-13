const { Pool } = require('pg');

const connectPostgres = () => {
  if (!process.env.DB_PASSWORD) {
    throw new Error('DB_PASSWORD is required');
  }

  const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
  });

  return pool;
};

module.exports = connectPostgres;