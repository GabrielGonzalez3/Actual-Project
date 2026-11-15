class trainer{
    constructor(id, trainername){
        this.id = id;
        this.trainername = trainername;
    }
}

const trainers = [];

export function CreateTrainer(name){
    const trainer = new trainer(trainers.length + 1, name);

    trainers.push(trainer);

    return trainer;
}

export function GetAllTrainers(){
    return trainers;
}