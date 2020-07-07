import { DayActivity } from "../src/day-activity.js";
import { Person } from "../src/person-class.js";
import { AerobicExercise } from "../src/aerobic-exercise.js";
import { StrengthExercise } from "../src/strength-exercise.js";

describe('DayActivity class tests', () => {

  let today;
  let fullDate;
  let newDayActivity;
  let strengthExercise;
  let aerobicExercise;
  let person;

  beforeEach(function(){
    today = new Date();
    fullDate = `${today.getDate()} ${today.getMonth() + 1} ${today.getFullYear()}`;
    newDayActivity = new DayActivity(fullDate);
    strengthExercise = new StrengthExercise("push up", 2, 20);
    aerobicExercise = new AerobicExercise("running", 30, 2, 10);
    person = new Person("Sue", 140);
  });
  
  test('should create DayActivity class instance', () => {    
    expect(newDayActivity).toMatchObject({
      strengthActivities: [], 
      aerobicActivities: [],
      date: "7 7 2020"
    });
  });
  
  test('should add strength exercise to strength activities array', () => {
    newDayActivity.addStrengthActivity(strengthExercise);
    expect(newDayActivity.strengthActivities).toEqual([strengthExercise]);
  });

  test('should add aerobic exercise to aerobic activities array', () => {
    newDayActivity.addAerobicActivity(aerobicExercise);
    expect(newDayActivity.aerobicActivities).toEqual([aerobicExercise]);;
  });

  test('should calculate number of particular strength activitie in a day', () => {
    newDayActivity.addStrengthActivity(strengthExercise);
    let secondStrengthActivity = new StrengthExercise("push up", 1, 20);
    let thirdStrengthActivity = new StrengthExercise("sit up", 1, 20);
    newDayActivity.addStrengthActivity(secondStrengthActivity);
    newDayActivity.addStrengthActivity(thirdStrengthActivity);
    expect(newDayActivity.calcNumberOfStrengthActivities("push up")).toBe(60);
  });

  test('should calculate time and distance of particular aerobic activities in a day', () => {
    newDayActivity.addAerobicActivity(aerobicExercise);
    let secondAerobicthActivity = new AerobicExercise("running", 30, 2, 10);
    let thirdAerobicActivity = new AerobicExercise("walking", 30, 1, 3);
    newDayActivity.addAerobicActivity(secondAerobicthActivity);
    newDayActivity.addAerobicActivity(thirdAerobicActivity);
    expect(newDayActivity.calcTimeOfAerobicActivities("running")).toBe(60);
    expect(newDayActivity.calcDistanceOfAerobicActivities("running")).toBe(4);
  });

  test('should calculate total calories burned in a day', () => {
    newDayActivity.addStrengthActivity(strengthExercise);
    newDayActivity.addAerobicActivity(aerobicExercise);
    expect(newDayActivity.calcDayCalories(person)).toBe(343.73);
  });
});