var bookshelf = require('bookshelf')(
  require('knex')(require('../../knexfile').development)
);
var knex = bookshelf.knex;
bookshelf.plugin('pagination');
module.exports = { bookshelf, knex }

