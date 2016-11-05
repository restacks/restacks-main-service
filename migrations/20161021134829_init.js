
exports.up = function(knex, Promise) {
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

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('repositories'),
  ])
};
