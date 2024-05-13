import dotenv from 'dotenv';
dotenv.config();

export default {
  user: process.env.POSTGRES_USER || "user_login",	
  password: process.env.POSTGRES_PASSWORD || "1234",
  host: process.env.POSTGRES_HOST || "localhost",
  database: process.env.POSTGRES_DATABASE || "db_login",
  port: parseInt(process.env.DB_PORT || "5432"),
  ssl: {
    rejectUnauthorized: false
  }
};
