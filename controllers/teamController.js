import {
    createTeam,
    getAllTeams
} from "../services/teamServices.js";

import{
    getAllTrainers
} from "../services/trainerServices.js";

export function getTeamPage(req, res){
    
    const teams = getAllTeams();
    const trainers = getAllTrainers();

    const teamDetails = teams.map(team => {
        const trainer = trainers.find(
            trainer => trainer.id === team.trainerId
        );

        return {
            id: team.id,
            teamName: team.teamName,
            trainerName: trainer ? trainer.trainerName: "Unknown"
        };
    });

    res.render("teams", {
        trainers,
        teamDetails
    });
};

export function addTeam(req, res){
    const { trainerId, teamName } = req.body;

    createTeam(
        Number(trainerId),
        teamName
    );
    res.redirect("/teams");
};