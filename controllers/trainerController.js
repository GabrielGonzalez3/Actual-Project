import {
    createTrainer,
    getAllTrainers
} from "../services/trainerServices.js";

export function getTrainerPage(req, res) {
    const trainers = getAllTrainers();

    res.render("trainers", { trainers });
};

export function addTrainer (req, res) {
    const { trainerName} = req.body;

    createTrainer(trainerName);

    res.redirect("/trainers");
};
