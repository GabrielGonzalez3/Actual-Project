import express from "express";
import { getTrainerPage, addTrainer } from "../controllers/trainerController.js";

const router = express.Router();

router.get("/", getTrainerPage);

router.post("/", addTrainer);

export default router;