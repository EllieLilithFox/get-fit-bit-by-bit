import 'bootstrap';
import './../css/styles.css';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';

// Maybe won't use these
// import './css/font-awesome.min.css';
//import '../css/aos.css';
//import '../css/tooplate-gymso-style.css';

$(document).ready(function() {
  $(".membership-form webform").submit(function(event) {
    event.preventDefault();
    let nameInput = $("#name").val();
    let weightInput = parseInt($("#weight").val());
    let sexInput = $("input:radio[name=sex]checked").val()
  })

  $("#strength-exercise-form").submit(function(event) {
    event.preventDefault();
    let strengthType = $("#strenght-type").val();
    let reps = parseInt(("#reps").val());
    let sets = parseInt(("#sets").val());
    let strenghtDate = $("#strength-exercise-date")

  })

  $("#aerobic-exercise-form").submit(function(event) {
    event.preventDefault();
    let aerobicType = $("#aerobic-type").val();
    let time = parseInt(("#time").val());
    let distance = parseInt(("#distance").val());
    let aerobicDate = $("#aerobic-exercise-date")

  })

$("input[name$='exercise-type']").click(function(event){
    let radio_value = $(this).val();
    if(radio_value=='muscle') {
      $("#aerobic-exercise-divider").hide("slow");
      $("#strength-exercise-divider").show("slow");
    }
    else if(radio_value=='aerobic') {
      $("#strength-exercise-divider").hide("slow");
      $("#aerobic-exercise-divider").show("slow");
    }
})
$('[name="exercise-type"]:checked').trigger('click');


});
