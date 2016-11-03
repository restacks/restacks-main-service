//@flow
exports.up = function(knex: any, Promise: any) {
  return Promise.all([
      knex.schema.createTable('repositories', function(table){
          table.increments('id').primary();
          table.string('name');
          table.integer('star');
          table.integer('fork');
          table.integer('pull_request');
          table.integer('watch');
      })
  ])
};

exports.down = function(knex: any, Promise: any) {
  return Promise.all([
      knex.schema.dropTable('repositories'),
  ])
};
