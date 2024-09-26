const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432, 
  database: 'users'
});

// module.exports = {
//   query: (text, params) => pool.query(text, params)
// };

module.exports = pool;