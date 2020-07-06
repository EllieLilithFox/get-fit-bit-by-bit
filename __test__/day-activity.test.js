import { DayActivity } from "../src/day-activity.js";
import { Exercise } from "../src/exercise-class.js";
import { Person } from "../src/person-class.js";

describe('create DayActivity class instance', () => {

  let today;
  let fullDate;
  let newDayActivity;
  let newExercise;
  let newPerson;

  beforeEach(function(){
    today = new Date();
    fullDate = `${today.getDate()} ${today.getMonth()} ${today.getFullYear()}`;
    newDayActivity = new DayActivity(fullDate);
    newExercise = new Exercise("dancing", 20, 6);
    newPerson = new Person("Sue", 140);
  });
  
  test('should create DayActivity class instance', () => {    
    expect(newDayActivity).toMatchObject({
      activities: [], 
      date: "6 6 2020"
    });
  });
  
  test('should add activity to activities array in class instance', () => {
    newDayActivity.addActivity(newExercise);
    expect(newDayActivity.activities).toEqual([newExercise]);
  });

  test('should calculate calories burned in all activities in a day', () => {
    newDayActivity.addActivity(newExercise);
    expect(newDayActivity.calcDayCalories(newPerson)).toBe(133.6);
  });
});