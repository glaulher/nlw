import Knex from 'knex';//com K maisculos para referenciar aos tipos da biblioteca

export async function up(knex: Knex) {
  return knex.schema.createTable('items', table=>{
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();    
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('items')
}