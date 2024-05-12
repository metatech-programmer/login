process.loadEnvFile();

export default {
  user: process.env.DB_USER || "user_login",	
  password: process.env.DB_PASSWORD || "1234",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_DATABASE || "db_login",
  port: parseInt(process.env.DB_PORT || "5432")
};
