import express from "express";
import helmet from "helmet";

import homeRoutes from "./routes/homeRoutes.js";
import trainerRoutes from "./routes/trainerRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";
import pokemonRoutes from "./routes/pokemonRoutes.js";
import { logger } from "./middleware/logger.js";
import { errorHandling } from "./middleware/errorHandling.js";

const app = express();
const port = 3000;

app.use(helmet()); //Cool side note, this is basically a buffer inbetween my routes
app.use(express.urlencoded({ extended: true}));
app.set("view engine", "ejs");
app.use(logger);
app.use(express.static("public"));

app.use("/", homeRoutes);
app.use("/trainers", trainerRoutes);
app.use("/teams", teamRoutes);
app.use("/pokemon", pokemonRoutes);

app.use(errorHandling);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});