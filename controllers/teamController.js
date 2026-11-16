import {
    createTeam,
    getAllTeams
} from "../services/teamServices.js";

import{
    getAllTrainers
} from "../services/trainerServices.js";

import{
    addPokemontoTeam,
    getAllTeamMembers
} from "../services/teamMemberService.js";

import{
    getAllPokemon
} from "../services/pokemonService.js";

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
    
    const { teamId, pokemonId } = req.body;

    addPokemontoTeam(teamId, pokemonId);

    res.redirect("/teams");
};