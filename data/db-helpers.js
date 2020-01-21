const db = require("./db-config");

//READ helpers
function getCars({ limit = null, sortby = "id", sortdir = "asc" }) {
  return db("cars")
    .limit(limit)
    .orderBy(sortby, sortdir);
}

function getCarById(id) {
  return db("cars")
    .where({ id })
    .first();
}

function insertCar(carData) {
  return db("cars").insert(carData);
}

function updateCarById(id, carData) {
  return db("cars")
    .where({ id })
    .update(carData);
}

function removeCarById(id) {
  return db("cars")
    .where({ id })
    .del();
}

module.exports = {
  getCars,
  getCarById,
  insertCar,
  updateCarById,
  removeCarById
};
