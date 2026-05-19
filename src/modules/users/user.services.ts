import { pool } from "../../db";
import type { Iuser } from "./user.interface";

const createUserintoDb = async (payLoad: Iuser) => {
  const { name, email, password, age } = payLoad;
  const result = await pool.query(
    `INSERT INTO users (name, email, password, age) VALUES ($1, $2, $3, $4) RETURNING *`,
    [name, email, password, age],
  );
  return result;
};

const getAllUsersfromDb = async () => {
  const result = await pool.query(`SELECT * FROM users`);
  console.log(result);
  return result;
};

const getUserbyIdfromDb = async (id: string) => {
  const result = await pool.query(`SELECT * FROM users WHERE id=$1`, [id]);
  return result;
};

export { createUserintoDb, getAllUsersfromDb, getUserbyIdfromDb };
