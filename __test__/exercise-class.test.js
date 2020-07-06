import { Exercise } from "../src/exercise-class.js";

describe('create Exercise class instance', () => {

  test('should create Exercise class instance', () => {
    const newExercise = new Exercise("running", 45, 5);
    // Mocks a new date object for the new aerobic instance
    const now = new Date();
    newExercise.date = now;

    expect(newExercise).toMatchObject({
      name : "running",
      time : 45,
      MET : 5,
      date: now
    });
  });
});

