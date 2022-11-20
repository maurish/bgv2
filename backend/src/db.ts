import { Pool, PoolClient } from "pg";

const pool = new Pool({
  database: "bgv2",
  host: "127.0.0.1",
  password: "supersecret",
  user: "postgres",
});

pool.connect();
pool.on("error", (err, _client) => {
  console.error("Unexpected db pool error", err);
  process.exit(-1);
});
export const getClient = async <T>(
  cb: (client: PoolClient) => Promise<T>
): Promise<T> => {
  let client;
  try {
    client = await pool.connect();
    return await cb(client);
  } finally {
    client?.release();
  }
};
