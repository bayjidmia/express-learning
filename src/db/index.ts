import { Pool } from "pg";
import { config } from "../config/config";

export const pool = new Pool({
  connectionString: config.connection_string,
});

export const initdb = async () => {
  try {
    await pool.query(`CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(20) NOT NULL,
      email VARCHAR(20) NOT NULL UNIQUE,
      password VARCHAR(20) NOT NULL,
      is_active BOOLEAN DEFAULT true,
      age int,
      created_at TIMESTAMP DEFAULT Now(),
      updated_at TIMESTAMP DEFAULT Now()
    )`);
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};
