const express = require("express");
//Import db helper functions
const {
  getCarById,
  getCars,
  updateCarById,
  insertCar,
  removeCarById
} = require("./data/db-helpers");

//Setup router
const router = express.Router();

//GET Routes
router.get("/", async (req, res, next) => {
  try {
    const cars = await getCars({});
    res.status(200).json(cars);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", validateCarId, (req, res) => {
  res.status(200).json(req.car);
});

//POST Routes
router.post("/", async (req, res, next) => {
  try {
    const carData = req.body;
    const created = await insertCar(carData);
    res.status(201).json(created);
  } catch (error) {
    next(error);
  }
});

//PUT Routes
router.put("/:id", validateCarId, async (req, res, next) => {
  const { id } = req.params;
  const carData = req.body;
  try {
    const changed = await updateCarById(id, carData);
    res.status(200).json(changed);
  } catch (error) {
    next(error);
  }
});

//DELETE Routes
router.delete("/:id", validateCarId, async (req, res, next) => {
  const { id } = req.params;
  try {
    await removeCarById(id);
    res.status(200).json(req.car);
  } catch (error) {
    next(error);
  }
});
module.exports = router;

async function validateCarId(req, res, next) {
  const { id } = req.params;
  try {
    if (/^[0-9]*$/.test(id)) {
      const car = await getCarById(id);
      if (car) {
        req.car = car;
        next();
      } else {
        res.status(404).json({ message: `No car with matching id found` });
      }
    } else {
      res.status(400).json({ message: `Car id needs to be an integer` });
    }
  } catch (error) {
    next(error);
  }
}
