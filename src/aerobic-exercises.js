export class AerobicExercise {
  //name-type of exercise, time - in minutes, distance - in miles
  constructor(name, time, distance) {
    this.name = name;
    this.time = time;
    this.distance = distance;
  }

  calcAerobicExerciseCalories(person, MET) {
    return Math.floor(0.0175 * MET * (person.weight / 2.2) * this.time * 100 ) / 100;
  }  
}

const MET = {
  cyclingSlow: 6,
  cyclingModerate: 8,
  cyclingFast: 10,
  runningSlow: 8,
  runningModerate: 10,
  runningFast: 12.5,
  walkingSlow: 3,
  walkingModerate: 3.5,
  walkingFast: 4,
  walkingRace: 6.5,
  dancingSlow: 5,
  dancingModerate: 6,
  dancingFast: 7,
  rowingMachineModerate: 8.5,
  rowingMachineFast: 12,
  stairsLow: 5,
  stairsModerate: 7,
  stairsFast: 11
};