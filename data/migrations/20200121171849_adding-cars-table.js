exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
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

exports.down = function(knex) {
  //Destroy cars table if it exists
  return knex.schema.dropTableIfExists("cars");
};
