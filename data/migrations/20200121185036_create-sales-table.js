exports.up = function(knex) {
  return knex.schema
    .createTable("sales", table => {
      table.increments("saleid");
      table.integer("price").notNullable();
      table.text("dateOfSale").notNullable();
      table
        .integer("carid")
        .unsigned()
        .references("id")
        .inTable("cars");
    })
    .table("cars", table => {
      table
        .integer("saleid")
        .unsigned()
        .references("saleid")
        .inTable("sales");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIdExists("sales").table("cars", table => {
    table.dropColumn("saleid");
  });
};
