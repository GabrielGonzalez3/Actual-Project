class Team {
    constructor(id, trainerId, teamName){
        this.id = id;
        this.trainerId = trainerId;
        this.teamName = teamName;
    }
}

const teams = [];

export function createTeam(trainerId, teamName){
    const existingTeam = teams.find(
        team => team.trainerId === Number(trainerId) && 
        team.teamName.toLowerCase() === teamName.toLowerCase()
    );
    
    if(existingTeam){
        throw new Error("A team with that name already exists");
    }
    
    const team = new Team(
        teams.length + 1,
        trainerId, 
        teamName
    );

    teams.push(team);

    return team;
}

export function getAllTeams(){
    return teams;
}