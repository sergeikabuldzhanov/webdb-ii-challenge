exports.up = function(knex) {
  return knex.schema
    .dropTableIfExists("cars")
    .createTable("sales", table => {
      table.increments("saleid");
      table.integer("price").notNullable();
      table.text("dateOfSale").notNullable();
      table
        .integer("carid")
        .unsigned()
        .references("id")
        .inTable("cars")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("cars", table => {
      table.increments();
      //unique id auto-increment
      table.text("VIN").notNullable();
      //"vin", text, required
      table.text("make").notNullable();
      //"make", text, required
      table.text("model").notNullable();
      //"model", text, required
      table.decimal("mileage").notNullable();
      //"mileage", float, required
      table.text("transmission");
      //"transmission", text, not required
      table.text("status");
      //"status", text, not required
      table
        .integer("saleid")
        .unsigned()
        .references("saleid")
        .inTable("sales")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("sales")
    .dropTableIfExists("cars")
    .createTable("cars", table => {
      table.increments();
      //unique id auto-increment
      table.text("VIN").notNullable();
      //"vin", text, required
      table.text("make").notNullable();
      //"make", text, required
      table.text("model").notNullable();
      //"model", text, required
      table.decimal("mileage").notNullable();
      //"mileage", float, required
      table.text("transmission");
      //"transmission", text, not required
      table.text("status");
      //"status", text, not required
    });
};
