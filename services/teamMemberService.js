class TeamMemeber {
    constructor(id, teamId, pokemonId){
        this.id = id;
        this.pokemonId = pokemonId;
        this.teamId = teamId;
    }
}

const teamMemebers = [];

export function addPokemontoTeam(teamId, pokemonId){
    const teamMemeber = new TeamMemeber(
        teamMemebers.length + 1,
        Number(teamId),
        Number(pokemonId)
    );

    teamMemebers.push(teamMemeber);

    return teamMemeber;
}

export function getAllTeamMembers(){
    return teamMemebers;
}

export function removePokemonFromTeam(id){
    const index = teamMemebers.findIndex(
        member => member.id === Number(id)
    );

    if(index !== -1){
        teamMemebers.splice(index, 1);
    }
}