import { Strength } from "../src/strength-class.js";

describe('create Strength object', () => {

  test('should create Strength object', () => {
    const strengthExercise = new Strength("push up", 2, 10);
    // Mocks a new date object for the new strength instance
    const now = new Date();
    strengthExercise.date = now;
    
    expect(strengthExercise).toMatchObject({
      name : "push up",
      sets : 2,
      reps : 10,
      date: now
    });
  });
});