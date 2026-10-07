const pgk = require('pg');
const uuidv4 = require('uuid');

const { Client } = pgk;

const client = new Client({
  host: 'localhost',
  port: 5700,
  user: 'postgres',
  password: 'postgres',
  database: 'postgres',
});

client.connect();

async function getAll() {
  const sql = `
    SELECT * FROM users
  `;

  const users = await client.query(sql, []);

  return users.rows[0];
}

async function create(name) {
  const id = uuidv4();

  const sql = `
    INSERT INTO users (id, name)
    VALUES ($1, $2)
    RETURNING *
  `;

  const users = await client.query(sql, [id, name]);

  return users.rows[0];
}

async function getUserById(userId) {
  const sql = `
    SELECT * FROM users
    WHERE id = $1
  `;
  const user = await client.query(sql, [userId]);

  return user.rows[0] || null;
}

async function deleteUserById(userId) {
  const user = await client.query('DELETE FROM users WHERE id = $1', [userId]);

  return user.rows[0] || null;
}

async function patchItem(userId, name) {
  const sql = 'UPDATE users SET name = $2 WHERE id = $1 RETURNING *';

  const user = await client.query(sql, [name, userId]);

  return user.rows[0] || null;
}

const usersService = {
  getAll,
  getUserById,
  create,
  patchItem,
  deleteUserById,
};

module.exports = usersService;
