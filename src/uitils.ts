import { pool } from "../database/db";

import {v4 as uuidv4} from 'uuid'

export const readQuery = async (query: string) => {
  try {
    const res = await pool.query(query);
    return res.rows;
  } catch (err) {
    console.error(err);
  }
};

export const createUserTable = async () => {
  const query = `
  CREATE TABLE users (
      id varchar  primary key,
      name varchar,
      email varchar,
      password varchar
  )
  `;

  return readQuery(query);
};

export const listTables = async () => {
  const query = `
      SELECT table_name
      FROM information_schema.tables
      WHERE table.schema = 'public'
      ORDER BY table_name; 
     `;

  try {
    const res = await pool.query(query);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

export const addUser = async (
  id: number,
  name: string,
  email: string,
  password: string
) => {
  const query = {
    text: "INSERT INTO users(id, name, email, password ) VALUES($1, $2, $3, $4)",
    values: [id, name, email, password],
  };

  try {
    const res = await pool.query(query);
    console.log("User craeted succesfully");
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
};

export const getUsers = async () => {
  const query = ` 
     SELECT * FROM users;
     `;

  try {
    const res = await pool.query(query);
    console.log(res.rows);
    return res.rows;
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
};
