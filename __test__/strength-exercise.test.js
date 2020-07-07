import { StrengthExercise } from "../src/strength-exercise.js";
import { Person } from "../src/person-class.js";

describe('create StrengthExercise class instance', () => {

  let strengthExercise;
  let person;

  beforeEach(function(){
    strengthExercise = new StrengthExercise("push up", 2, 20);
    person = new Person("Sue", 140);
  })

  test('should create StrengthExercise class instance', () => {
    expect(strengthExercise).toMatchObject({
      name : "push up",
      sets : 2,
      reps : 20
    });
  });

  test('should calculate calories for the exercise', () => {
    expect(strengthExercise.calcStrengthExerciseCalories(person)).toBe(9.65);
  });
});

