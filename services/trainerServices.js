class Trainer{
    constructor(id, trainerName){
        this.id = id;
        this.trainerName = trainerName;
    }
}

const trainers = [];

export function createTrainer(name){
    const existingTrainer = trainers.find(
        trainer => trainer.trainerName.toLowerCase() === name.toLowerCase()
    );
    
    if(existingTrainer){
        throw new Error("A trainer with that name already exists");
    }

    const trainer = new Trainer(
        trainers.length + 1, 
        name
    );
    trainers.push(trainer);

    return trainer;
}

export function getAllTrainers(){
    console.log(trainers);
    return trainers;
}