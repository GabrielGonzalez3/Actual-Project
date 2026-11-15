import {
    CreateTrainer,
    GetAllTrainers
} from "../services/trainerServices.js";

export function getTrainerPage(req, res) {
    const trainers = GetAllTrainers();

    res.render("trainers", { trainers });
};

export function addTrainer (req, res) {
    const { trainerName} = req.body;

    CreateTrainer(trainerName);

    res.redirect("/trainers");
};
