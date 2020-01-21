exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "11HKAJ835PUHE2KF2",
          make: "BOOP",
          model: "YES",
          mileage: 0,
          transmission: "",
          status: ""
        },
        {
          vin: "11HKAJ835PUHE2KF2",
          make: "BOOP",
          model: "YES",
          mileage: 1000,
          status: "salvage"
        },
        {
          vin: "11HKAJ835PUHE2KF2",
          make: "BOOP",
          model: "YES",
          mileage: 100000,
          transmission: "auto"
        }
      ]);
    });
};
