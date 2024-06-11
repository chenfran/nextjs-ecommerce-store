import { config } from 'dotenv-safe';
import postgres from 'postgres';

console.log(config());

config();

const sql = postgres();

console.log(
  await sql`
SELECT * FROM products
`,
);

// We end the connection. This is only for the example.
// In your code you will want a persistent connection to the database
await sql.end();
