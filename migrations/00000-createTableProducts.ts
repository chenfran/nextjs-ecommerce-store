import { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  price: number | null;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(100) NOT NULL,
      price integer
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE products`;
}
