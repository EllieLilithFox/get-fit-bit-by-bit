import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './../css/font-awesome.min.css';
import './../css/aos.css';
import './../css/tooplate-gymso-style.css';
// import './../css/styles.css';
import $ from "jquery";


/* <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/aos.css"></link> */

$(document).ready(function() {

});
$("input[name$='bn']").click(function(event){
    var radio_value = $(this).val();
    if(radio_value=='1') {
      $("#multibn").show("slow");
    }
    else if(radio_value=='2') {
      $("#multibn").hide("slow");
    }
    })
    $('[name="bn"]:checked').trigger('click');
