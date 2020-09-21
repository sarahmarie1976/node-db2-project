
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments('id');
        tbl.text('vin', 128).unique().notNullable();
        tbl.text('make', 128).notNullable();
        tbl.text('model', 128).notNullable();
        tbl.integer('miles').notNullable();
        tbl.text('transmission type', 128);
        tbl.text('title status', 128);
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  
};
