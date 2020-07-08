import {Chart} from "../../node_modules/chart.js/dist/Chart.js";
import $ from "jquery";

export class OurCharts {

  calorieLineChart (personObject) {
    let ctx = $('#aerobic-calorie-burn-chart');

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

    let lineChart = new Chart(ctx, {
      type: 'line',
      data: { 
        labels: aerobicCalorieDates,
        datasets: [{
          label: "Total Calorie Burn By Day",
          data: aerobicCalorieBurn,
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          lineTension: 0.2
          
        }]
      },
      options: {}
    });
  }

  aerobicActivityTimeChart (personObject) {
    let ctx = $('#aerobic-exercise-time-chart');

    // An Array of all days on which an aerobic exercise occured
    let aerobicExerciseDates = [];
    personObject.dayActivityObjects.forEach (function(dayActivityObject) {
      aerobicExerciseDates.push(dayActivityObject.date.toString());
    });

    // populates an array of aerobic exercise time for the day
    let aerobicExerciseTime = [];
    personObject.dayActivityObjects.forEach (function(dayActivityObject) {
      aerobicExerciseTime.push(dayActivityObject.calcTimeOfAerobicActivities());
    });

    let barChart = new Chart(ctx, {
      type: 'bar',
      data: { 
        labels: aerobicExerciseDates,
        datasets: [{
          label: "Total Aerobic Exercise Time by Day",
          data: aerobicExerciseTime,
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        }]
      },
      options: {}
    });
  }

  strengthRepsPerDay (personObject) {
    let ctx = $('#strength-total-reps-chart');

    // An Array of all days on which a strength exercise occured
    let strengthExerciseDates = [];
    personObject.dayActivityObjects.forEach (function(dayActivityObject) {
      strengthExerciseDates.push(dayActivityObject.date.toString());
    });

    // populates an array of strength exercise reps per day
    let totalRepsPerDay = [];
    personObject.dayActivityObjects.forEach (function(dayActivityObject) {
      totalRepsPerDay.push(dayActivityObject.calcNumberOfStrengthActivities());
    });

    let barChart = new Chart(ctx, {
      type: 'bar',
      data: { 
        labels: strengthExerciseDates,
        datasets: [{
          label: "Total Exercise Reps by Day",
          data: totalRepsPerDay,
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        }]
      },
      options: {}
    });
  }
}