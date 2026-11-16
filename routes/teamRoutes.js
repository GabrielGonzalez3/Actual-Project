import express from "express";
import { getTeamPage, addTeam, addPokemon, removePokemon, publishTeamGizmo, getPublishedTeamsPage } from "../controllers/teamController.js";

const router = express.Router();

router.get("/", getTeamPage);

router.post("/", addTeam);

router.post("/pokemon", addPokemon);

router.post("/pokemon/remove/:id", removePokemon);

router.get("/published", getPublishedTeamsPage);

router.post("/publish/:id", publishTeamGizmo);

export default router;