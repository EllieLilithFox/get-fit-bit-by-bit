import { AerobicExercise } from "../src/aerobic-exercise.js";
import { Person } from "../src/person-class.js";

describe('create AerobicExercise class instance', () => {

  let aerobicExercise;
  let person;

  beforeEach(function(){
    aerobicExercise = new AerobicExercise("running", 30, 2, 10);
    person = new Person("Sue", 140);
  })

  test('should create AerobicExercise class instance', () => {
    expect(aerobicExercise).toMatchObject({
      name : "running",
      time : 30,
      distance : 2,
      intensity: 10
    });
  });

  test('should calculate calories for the exercise', () => {
    expect(aerobicExercise.calcAerobicExerciseCalories(person)).toBe(334.09);
  });
});