import { Sql } from 'postgres';

const products = [
  { id: 1, name: 'Chicken', price: 10 },
  { id: 2, name: 'Bonbon', price: 10 },
  { id: 3, name: 'Panda', price: 10 },
  { id: 4, name: 'Dino', price: 10 },
  { id: 5, name: 'Parrot', price: 10 },
  { id: 6, name: 'Strawberry', price: 10 },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
      INSERT INTO
        products (name, price)
      VALUES
        (
          ${product.name},
          ${product.price}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products
      WHERE
        id = ${product.id}
    `;
  }
}
