export class DayActivity {
  constructor(date) {
    this.activities = [];
    this.date = date;
  }

  addActivity(activity) {
    this.activities.push(activity);
  }

  calcDayCalories(person) {
    let totalCalories = 0;
    this.activities.forEach((element) => {
      totalCalories += element.calcCalories(person);
    });
    return totalCalories;
  }
}