import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import $ from "jquery";

import {Person} from './person-class';
import {DayActivity} from './day-activity';
import {AerobicExercise} from './aerobic-exercise';
import {StrengthExercise} from './strength-exercise';

import {getActive} from './meetup-api';
import {getQuote} from './quote-api';

import {OurCharts} from './OurCharts'


// Maybe won't use these
// import './css/font-awesome.min.css';
//import '../css/aos.css';
//import '../css/tooplate-gymso-style.css';


// Activity API Call -----

async function displayActivity() {
  const jsonifiedResponse = await getActive();
  if (jsonifiedResponse === false) {
    $("#quote").text("Sorry no quotes today.");
  } else {
    $("#activity").html(`${JSON.stringify(jsonifiedResponse, null, 4)}`);
    console.log(jsonifiedResponse.results);
  }
}

// Quote API Call -----

async function displayQuote() {
  const quotesResponse = await getQuote();
  if (quotesResponse === false) {
    $("#quote").text("Sorry no quotes today.");
  } else {
    let random = Math.floor(Math.random() * quotesResponse.length);
    $("#quote").html(`${quotesResponse[random].text}`);
    if (!quotesResponse[random].author) {
      $("#author").html("Author Unknown");
    } else {
      $("#author").html(`${quotesResponse[random].author}`);
    }
    // console.log(jsonifiedResponse);
  }
}

$(document).ready(function() {
  // Test Data
  /*
  let testPerson = new Person("Test", "155")
  testPerson.addDayActivity(new DayActivity("2020-07-08"));
  testPerson.addDayActivity(new DayActivity("2020-07-07"));
  testPerson.addDayActivity(new DayActivity("2020-07-06"));
  testPerson.addDayActivity(new DayActivity("2020-07-05"));
  testPerson.findDayActivityObject("2020-07-08").addAerobicActivity(new AerobicExercise("walking", "20", "11", "Slow"));
  testPerson.findDayActivityObject("2020-07-07").addAerobicActivity(new AerobicExercise("walking", "25", "9", "Slow"));
  testPerson.findDayActivityObject("2020-07-06").addAerobicActivity(new AerobicExercise("walking", "34", "10", "Slow"));
  testPerson.findDayActivityObject("2020-07-05").addAerobicActivity(new AerobicExercise("walking", "15", "9", "Slow"));
  testPerson.findDayActivityObject("2020-07-08").addStrengthActivity(new StrengthExercise("push-ups", "2", "12"))
  testPerson.findDayActivityObject("2020-07-07").addStrengthActivity(new StrengthExercise("pull-ups", "2", "12"))
  testPerson.findDayActivityObject("2020-07-06").addStrengthActivity(new StrengthExercise("pull-ups", "2", "8"))
  testPerson.findDayActivityObject("2020-07-05").addStrengthActivity(new StrengthExercise("push-ups", "2", "14"))
  */

  let person;
  let strengthExercise;
  let aerobicExercise; 
  let newDayActivity;

  displayActivity();
  displayQuote();

  let chart = new OurCharts();

  $(".membership-form").submit(function(event) {
    event.preventDefault();
    let nameInput = $("#name").val();
    let weightInput = parseInt($("#weight").val());
    person = new Person (nameInput, weightInput);
    $("#user-name").text(person.name);
    $("#name").val("");
    $("#weight").val("");
    $("#exercises").fadeIn();
    $(".modal-body").html("You are subscribed");
    console.log(person);
  });

  $("#strength-exercise-form").submit(function(event) {
    event.preventDefault();
    let strengthType = $("#strength-type").val();
    let reps = parseInt($("#reps").val());
    let sets = parseInt($("#sets").val());
    
    //make date input required or default !?!?!??!
    let date = $("#strength-exercise-date").val();
    strengthExercise = new StrengthExercise(strengthType, sets, reps);
    if(!person.findDayActivityObject(date)) {
      newDayActivity = new DayActivity(date);
      person.addDayActivity(newDayActivity);
      newDayActivity.addStrengthActivity(strengthExercise);
    } else {
      person.findDayActivityObject(date).addStrengthActivity(strengthExercise);
    }
    console.log(newDayActivity);
    console.log(person);
  });

  $("#aerobic-exercise-form").submit(function(event) {
    event.preventDefault();
    let aerobicType = $("#aerobic-type").val();
    let time = parseInt($("#time").val());
    let distance = parseInt($("#distance").val());
    let intensity = $("#intensity").val();
    let date = $("#aerobic-exercise-date").val();
    aerobicExercise = new AerobicExercise(aerobicType, time, distance, intensity);
    
    if(!person.findDayActivityObject(date)) {
      newDayActivity = new DayActivity(date);
      person.addDayActivity(newDayActivity);
      newDayActivity.addAerobicActivity(aerobicExercise);
    } else {
      person.findDayActivityObject(date).addAerobicActivity(aerobicExercise);
    }
    console.log(newDayActivity);
    console.log(person);
  });

  $("input[name$='exercise-type']").click(function(){
    let radio_value = $(this).val();
    if(radio_value=='muscle') {
      $("#aerobic-exercise-divider").hide("slow");
      $("#strength-exercise-divider").show("slow");
    } else if(radio_value=='aerobic') {
      $("#strength-exercise-divider").hide("slow");
      $("#aerobic-exercise-divider").show("slow");
    }
  });

  $('[name="exercise-type"]:checked').trigger('click');


});

  $('#aerobic-calorie-burn-chart-button').click(function(){
    chart.calorieLineChart(person);
    $('#strength-total-reps-chart, #aerobic-exercise-time-chart').hide();
    $('#aerobic-calorie-burn-chart').show();
  });

  $('#aerobic-exercise-time-chart-button').click(function(){
    chart.aerobicActivityTimeChart(person);
    $('#aerobic-calorie-burn-chart, #strength-total-reps-chart').hide();
    $('#aerobic-exercise-time-chart').show();
  });

  $('#strength-total-reps-chart-button').click(function(){
    chart.strengthRepsPerDay(person);
    $('#aerobic-calorie-burn-chart, #aerobic-exercise-time-chart').hide();
    $('#strength-total-reps-chart').show();
  });

});

