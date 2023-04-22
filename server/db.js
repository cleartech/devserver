const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "1402",
  host: "localhost",
  port: "5432",
  database: "devdb",
});

module.exports = pool;
