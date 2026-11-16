class TeamMemeber {
    constructor(id, teamId, pokemonId){
        this.id = id;
        this.pokemonId = pokemonId;
        this.teamId = teamId;
    }
}

const teamMemebers = [];

export function addPokemontoTeam(teamId, pokemonId){
    const pokemonCount = teamMemebers.filter(
        member => member.teamId === Number(teamId)
    ).length;

    if(pokemonCount >= 6){
        throw new Error( "Teams can only have 6 Pokemon"
        );
    }
    
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