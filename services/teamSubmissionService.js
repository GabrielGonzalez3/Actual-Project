class TeamSubmission{
    constructor(id, teamId, visibleStatus){
        this.id = id;
        this.teamId = teamId;
        this.visibleStatus = visibleStatus;
    }
}

const teamSubmission=[];

export function publishTeam(teamId){
    const submission = new TeamSubmission(
        teamSubmission.length + 1,
        Number(teamId),
        "Public"
    );

    teamSubmission.push(submission);

    return submission;
}

export function getAllSubmissions(){
    return teamSubmission;
}