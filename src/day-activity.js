export class DayActivity {
  constructor(date) {
    this.strengthActivities = [];
    this.aerobicActivities = [];
    this.date = date;
  }

  addStrengthActivity(activity) {
    this.strengthActivities.push(activity);
  }

  addAerobicActivity(activity) {
    this.aerobicActivities.push(activity);
  }

  calcNumberOfStrengthActivities(activityName) {
    let totalNumberOfReps = 0;
    this.strengthActivities.forEach((element) => {
      if(element.name == activityName) {
        totalNumberOfReps += element.sets * element.reps;
      }
    });
    return totalNumberOfReps;
  }

  calcTimeOfAerobicActivities(activityName) {
    let totalTime = 0;
    this.aerobicActivities.forEach((element) => {
      if(element.name == activityName) {
        totalTime += element.time;
      }
    });
    return totalTime;
  }

  calcDistanceOfAerobicActivities(activityName) {
    let totalDistance = 0;
    this.aerobicActivities.forEach((element) => {
      if(element.name == activityName) {
        totalDistance += element.distance;
      }
    });
    return totalDistance;
  }

  calcDayCalories(person) {
    let totalCalories = 0;
    this.strengthActivities.forEach((element) => {
      totalCalories += element.calcStrengthExerciseCalories(person);
    });
    this.aerobicActivities.forEach((element) => {
      totalCalories += element.calcAerobicExerciseCalories(person);
    });
    return Math.floor(totalCalories * 100)/100;
  }
}