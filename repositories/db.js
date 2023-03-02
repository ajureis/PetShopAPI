import pg from "pg";

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString:
      "postgres://bzqzylve:9r76UjkCLZOkY-TpvZ9hmcqzMcUlZ8Er@batyr.db.elephantsql.com/bzqzylve",
  });
  global.connection = pool;

  return pool.connect();
}

export { connect };
