import express from "express";
import { getTeamPage } from "../controllers/teamController.js";

const router = express.Router();

router.get("/", getTeamPage);

export default router;