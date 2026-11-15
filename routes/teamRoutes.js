import express from "express";
import { getTeamPage, addTeam } from "../controllers/teamController.js";

const router = express.Router();

router.get("/", getTeamPage);

router.post("/", addTeam);

export default router;