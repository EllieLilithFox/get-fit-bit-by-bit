export class AerobicExercise {
  //name-type of exercise, time - in minutes, distance - in miles
  constructor(name, time, distance, intensity) {
    this.name = name;
    this.time = time;
    this.distance = distance;
    this.intensity = intensity;
  }

  calcAerobicExerciseCalories(person) {
    return Math.floor(0.0175 * this.intensity * (person.weight / 2.2) * this.time * 100 ) / 100;
  }  
}



/*const intensity = {
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
};*/