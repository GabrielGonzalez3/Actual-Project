class Trainer{
    constructor(id, trainerName){
        this.id = id;
        this.trainerName = trainerName;
    }
}

const trainers = [];

export function createTrainer(name){
    const trainer = new Trainer(
        trainers.length + 1, 
        name
    );
    trainers.push(trainer);

    return trainer;
}

export function getAllTrainers(){
    return trainers;
}