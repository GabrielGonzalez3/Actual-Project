import express from "express";
import { getTeamPage, addTeam, addPokemon } from "../controllers/teamController.js";

const router = express.Router();

router.get("/", getTeamPage);

router.post("/", addTeam);

/*router.post("/pokemon", (req,res) => {
    console.log("POST ROUTE HIT");
    res.send("POST ROUTE HIT");
});*/

router.post("/pokemon", addPokemon);

export default router;