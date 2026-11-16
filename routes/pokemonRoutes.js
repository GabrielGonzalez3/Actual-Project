import express from "express";
import { getPokemonPage } from "../controllers/pokemonController.js";

const router = express.Router();

router.get("/", getPokemonPage);

export default router;