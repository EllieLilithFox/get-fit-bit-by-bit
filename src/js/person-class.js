export class Person {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
    this.dayActivityObjects = [];
  }

  addDayActivity(dayActivityObject) {
    this.dayActivityObjects.push(dayActivityObject);
  }

  findDayActivityObject(date) {
    if(this.dayActivityObjects.length > 0) {
      for(let i=0; i < this.dayActivityObjects.length; i++) {
        if(this.dayActivityObjects[i].date == date) {
          return this.dayActivityObjects[i];
        }
      }
    } else {
      return false;
    }
  }
}