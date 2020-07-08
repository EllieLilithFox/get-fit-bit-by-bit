import {Chart} from "../../node_modules/chart.js/dist/Chart.js";
import $ from "jquery";

export class OurCharts {
  constructor() {
    this.ctx = $('#myChart');
  }

  calorieLineChart (personObject) {

    // populates an array of calories burned in aerobic exercise for the day
    let aerobicCalorieBurn = [];
    personObject.dayActivityObjects.forEach (function(dayActivityObject) {
      aerobicCalorieBurn.push(dayActivityObject.calcDayCalories(personObject));
    });

    // An Array of all days on which an aerobic exercise occured
    let aerobicCalorieDates = [];
    personObject.dayActivityObjects.forEach (function(dayActivityObject) {
      aerobicCalorieDates.push(dayActivityObject.date.toString());
    });

    let lineChart = new Chart(this.ctx, {
      type: 'line',
      data: { 
        labels: aerobicCalorieDates,
        datasets: [{
          label: "Aerobic Calorie Burn By Date",
          data: aerobicCalorieBurn,
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          lineTension: 0.2
          
        }]
      },
      options: {
        //backgroundColor: "rgba(255, 255, 255, 0.2)",
        //borderColor: "rgba(255, 0, 0, 0.2)",
      }
    });
  }

}