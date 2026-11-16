import express from "express";
import { getTeamPage, addTeam, addPokemon, removePokemon, publishTeamGizmo } from "../controllers/teamController.js";

const router = express.Router();

router.get("/", getTeamPage);

router.post("/", addTeam);

router.post("/pokemon", addPokemon);

router.post("/pokemon/remove/:id", removePokemon);

router.post("/publish/:id", publishTeamGizmo);

export default router;