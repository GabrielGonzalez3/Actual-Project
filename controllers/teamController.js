import {
    createTeam,
    getAllTeams
} from "../services/teamServices.js";

import{
    getAllTrainers
} from "../services/trainerServices.js";

import{
    addPokemontoTeam,
    getAllTeamMembers,
    removePokemonFromTeam
} from "../services/teamMemberService.js";

import{
    getAllPokemon
} from "../services/pokemonService.js";

import{
    publishTeam,
    getAllSubmissions
} from "../services/teamSubmissionService.js";

export function getTeamPage(req, res){
    
    const teams = getAllTeams();
    const trainers = getAllTrainers();
    const pokemon = getAllPokemon();
    const teamMembers = getAllTeamMembers();
    const teamMemberDetails = teamMembers.map(member => {
        const team = teams.find(
            team => team.id === member.teamId
        );

        const pokeymon = pokemon.find(
            pokeymon => pokeymon.id === member.pokemonId
        );

        return {
            id: member.id,
            teamName: team ? team.teamName : "Unknown",
            pokemonName: pokeymon ? pokeymon.pokemonName : "Unknown"
        };
    });

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
        teams,
        trainers,
        pokemon,
        teamMembers,
        teamDetails,
        teamMemberDetails
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

export function addPokemon(req, res){
    
    console.log("Pokemon Route hit!");
    try{
        const { teamId, pokemonId } = req.body;

        addPokemontoTeam(teamId, pokemonId);

        res.redirect("/teams");
    }
    catch(err){
        res.send(error.message);
    }
    
};

export function removePokemon(req, res){
    console.log("REMOVE ROUTE HIT");
    
    const {id} = req.params;

    console.log("ID", id);

    removePokemonFromTeam(id);

    res.redirect("/teams");
}

export function publishTeamGizmo(req, res){
    const {id} = req.params;

    publishTeam(id);

    res.redirect("/teams");
}