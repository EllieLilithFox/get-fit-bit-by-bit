import { Aerobic } from "../src/aerobic-class.js";

describe('create Aerobic object', () => {

  test('should create Aerobic object', () => {
    const aerobicExercise = new Aerobic("running", 45, 5);
    // Mocks a new date object for the new aerobic instance
    const now = new Date();
    aerobicExercise.date = now;
    
    expect(aerobicExercise).toMatchObject({
      name : "running",
      time : 45,
      distance : 5,
      date: now
    });
  });
});

