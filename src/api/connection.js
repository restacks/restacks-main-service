var bookshelf = require('bookshelf')(
  require('knex')(require('../../knexfile').development)
);
var knex = bookshelf.knex;
module.exports = { bookshelf, knex }

