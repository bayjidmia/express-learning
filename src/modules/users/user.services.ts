import { pool } from "../../db";
import type { Iuser } from "./user.interface";
import bcrypt from "bcryptjs";

const createUserintoDb = async (payLoad: Iuser) => {
  const { name, email, password, age } = payLoad;
  const hashPassword = await bcrypt.hash(password, 10);
  const result = await pool.query(
    `INSERT INTO users (name, email, password, age) VALUES ($1, $2, $3, $4) RETURNING *`,
    [name, email, hashPassword, age],
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

const updateUserinDb = async (payLoad: Iuser, id: string) => {
  const { name, password, age, is_active } = payLoad;
  const hashPassword = await bcrypt.hash(password, 10);
  const result = await pool.query(
    `UPDATE users SET name=COALESCE($1,name),  password=COALESCE($2,password), age=COALESCE($3,age), is_active=COALESCE($4,is_active), updated_at=Now() WHERE id=$5 RETURNING *`,
    [name, hashPassword, age, is_active, id],
  );
  return result;
};
export {
  createUserintoDb,
  getAllUsersfromDb,
  getUserbyIdfromDb,
  updateUserinDb,
};
