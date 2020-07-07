export class StrengthExercise {
  //name-type of exercise, sets-number of sets, reps - number of reps
  constructor(name, sets, reps) {
    this.name = name;
    this.sets = sets;
    this.reps = reps;
  }

  calcStrengthExerciseCalories(person) {
    //assume one rep last for 2 seconds, and assume that intensity is moderate - 6.5
    let time = this.sets * this.reps / 30;
    return Math.floor(0.0175 * 6.5 * (person.weight / 2.2) * time * 100 ) / 100;
  }  
}