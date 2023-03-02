import express from "express";
import animalController from "../controllers/animal.controller.js";

const router = express.Router();

router.post("/", animalController.createAnimal);
router.get("/", animalController.getAnimais);
router.get("/:id", animalController.getAnimal);
router.delete("/:id", animalController.deleteAnimal);
router.put("/", animalController.updateAnimal);

export default router;
