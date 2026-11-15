import express from "express";

import homeRoutes from "./routes/homeRoutes.js";
import trainerRoutes from "./routes/trainerRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true}));
app.set("view engine", "ejs");

app.use("/", homeRoutes);
app.use("/trainers", trainerRoutes);
app.use("/teams", teamRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});