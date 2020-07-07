import 'bootstrap';
import './../css/styles.css';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Person} from './person-class';
import {DayActivity} from './day-activity';
import {AerobicExercise} from './aerobic-exercise';
import {StrengthExercise} from './strength-exercise';

// Maybe won't use these
// import './css/font-awesome.min.css';
//import '../css/aos.css';
//import '../css/tooplate-gymso-style.css';

/*let today = new Date(); 
function getFullDate(date) {
  return `${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`; //"7 7 2020"
}
let newDayActivity;

function createNewDateObject() {
  if (getFullDate(today) == newDayActivity.date) {
    return newDayActivity;
  } else {
    newDayActivity = new DayActivity(getFullDate(today));
  }
}*/


// Need a function to create a new date object if one doesn't already exist,
// If one does, then push Aerobic/strength exercise object to the appropriate date's exercise array

function makeOrPushExerciseObjectAndDateObject (person, date, exerciseType, exerciseObject) {
  for(const dateObject of person.dateObjects) {
    if (dateObject.date === date) {
      if(exerciseType === "Aerobic") {
        // push AerobicExercise to aerobicExerciseArray
        //break
      } else if (exerciseType === "Strength") {
        // push StrengthExercise to strengthExerciseArray
        //break
      }
    }
      // make a new dateObject and push to person, with exercise pushed to the new dateObject exercise array
      if(exerciseType === "Aerobic") {
        // push AerobicExercise to aerobicExerciseArray
        // break
      } else if (exerciseType === "Strength"{
        // push StrengthExercise to strengthExerciseArray
        // break
      }
    }
}

$(document).ready(function() {
  let person;
  let strengthExercise;
  let aerobicExercise;
  
  let today = new Date(); 
  function getFullDate(date) {
    return `${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`; //"7 7 2020"
  }
  let newDayActivity = new DayActivity(getFullDate(today));

  /*function createNewDateObject() {
    if (getFullDate(today) == newDayActivity.date) {
      return newDayActivity;
    } else {
      newDayActivity = new DayActivity(getFullDate(today));
    }
  }*/

  // Array of dates and their prospective exercises
  //let exerciseDates = [];

  $(".membership-form webform").submit(function(event) {
    event.preventDefault();
    let nameInput = $("#name").val();
    let weightInput = parseInt($("#weight").val());
    //let sexInput = $("input:radio[name=sex]checked").val()
    person = new Person (nameInput, weightInput);
    $('#name').text(person.name);
  });

  $("#strength-exercise-form").submit(function(event) {
    event.preventDefault();
    let strengthType = $("#strength-type").val();
    let reps = parseInt($("#reps").val());
    let sets = parseInt($("#sets").val());
    strengthExercise = new StrengthExercise(strengthType, sets, reps);
    newDayActivity.addStrengthActivity(strengthExercise);
    //console.log("Calories burned: " + newDayActivity.calcDayCalories(person));
    //let strenghtDate = $("#strength-exercise-date")
    //let date = new Date
  });

  $("#aerobic-exercise-form").submit(function(event) {
    event.preventDefault();
    let aerobicType = $("#aerobic-type").val();
    let time = parseInt($("#time").val());
    let distance = parseInt($("#distance").val());
    let intensity = $("#intensity").val();
    aerobicExercise = new AerobicExercise(aerobicType, time, distance, intensity);
    console.log("Intensity coef: " + aerobicExercise.calculateIntensityCoef());
    newDayActivity.addAerobicActivity(aerobicExercise);
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
