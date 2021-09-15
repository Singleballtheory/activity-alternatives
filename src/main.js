import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {User, userActivity} from './js/activities.js';
// import prebuiltArray from './js/prebuilts.js';
import quoteService from './js/quotes.js';



$(document).ready(function() {
  let user;
  let activityArray = [];
  quoteService.getQuote().then(function(response) {
    const body = JSON.parse(response);
    $('#quote').append(`${body[0].h}`);
    $('#quote').html(`Hello`);
  });
  $('#submitUser').click(function(event) {
    event.preventDefault();
    const name = $('#nameInput').val();
    user = new User(name);
    console.log(user);
    $('#nameDisplay').html(`${user.name}`);
    $("#usersName").show();
    $("#yourName").hide();
    return user;
  });

  // function displayActivity(activityToDisplay) {
  //   let activityDisplay = $("ul#activityDisplay");
  //   let htmlForActivity = "";
  //   Object.keys(activityToDisplay.activities).forEach(function(key) {
  //     const activityList = activityToDisplay.findActivity(key);
  //     htmlForActivity += "<li id=" + user.activity + ">" + "</li>";
  //     return activityList;
  //   });
  //   activityDisplay.html(htmlForActivity);
  // }


  $('#submitActivities').click(function(event) {
    event.preventDefault();
    const activity = $('#activity').val();
    const time = $('#time').val();
    const energy = $('#energy').val();
    const urgency = $('#urgency').val();
    const loc = $('#loc').val();
    $('#activity').val("");
    $('#time').val("");
    $('#energy').val("");
    $('#urgency').val("");
    $('#loc').val("");
    const newActivity = new userActivity(activity, time, energy, urgency, loc);
    user.addActivity(newActivity);
    activityArray.push(Object.values(user.activities[user.currentId]));
    console.log(user.findActivity(2), "this is the findActivity console log");

    // $('#activityDisplay').html(`${newActivity.activity + " " + newActivity.time + " " +  newActivity.energy + " " +  newActivity.urgency + " " + newActivity.loc + " " + newActivity.id}`);
    // return newActivity;

  });

  // $('#showActivities').click(function(event) {
  //   event.preventDefault();
  //   $('#activityDisplay').html(`${JSON.stringify(user.activities)}`);
  // });

  // $('#energyCheck').click(function(event) {
  //   event.preventDefault();
  //   for (let i = 0; i < activityArray.length; i++) { 
  //     if (activityArray[i][2] === "low") {
  //       console.log("low" + " " + activityArray[i][0]);
  //     } else if (activityArray[i][2] === "medium") {
  //       console.log("medium" + " " + activityArray[i][0]);
  //     } else { 
  //       console.log("high" + " " + activityArray[i][0]);
  //     }
  //   }
  // });

  $('#timeCheck').click(function(event) {
    event.preventDefault();
    let timeMatchArray = [];
    let displayList = $("ul#displayArray");
    let htmlForDisplay = "";
    const userInput = $("input#timeAvail").val();
    for (let i = 0; i < activityArray.length; i++) {
      if (parseInt(activityArray[i][1]) <= parseInt(userInput)) {
        timeMatchArray.push(activityArray[i]);
        console.log(timeMatchArray);
        htmlForDisplay = "";
        // $("#activityDisplay").html(timeMatchArray);

        for (let i = 0; i < timeMatchArray.length; i++) {
          htmlForDisplay += "<li id=" + this.currentId + ">" + activityArray[i][0] + "<ul>" + "<li>Urgency:" + activityArray[i][3] + "</li>" + "<li>Required Time:" + activityArray[i][1] + "</li>" + "<li>Required Energy:" + activityArray[i][2] + "</li>" + "<li>Home or Away?:" + activityArray[i][4] + "</li>" + "</ul></li>";
          displayList.html(htmlForDisplay);
        }
      } else {
        if (timeMatchArray === []) {
        htmlForDisplay += "<li> No matches</li>";
        displayList.html(htmlForDisplay);
        }
        else if (parseInt(activityArray[i][1]) > parseInt(userInput)) {
          htmlForDisplay = "";
          htmlForDisplay += "<li> No matches</li>";
        displayList.html(htmlForDisplay);
        }
      }
      // displayList.html(htmlForDisplay);
    }
  });

  // 0: Activity Name | 1: Time | 2: Energy | 3: Urgency | 4: Home/Away | 5: ID

  $('#activityInputs').click(function(event) {
    event.preventDefault();
    $("#activityInputForms").show();
    $("#activityInputs").hide();
    $("#doneAdding").show();
  });
  
  $('#findActiv').click(function(event) {
    event.preventDefault();
    $("#checkForm").show();
  });

  $("#doneAdding").click(function(event) {
    event.preventDefault();
    $("#activityInputForms").hide();
    $("#doneAdding").hide();
    $("#activityInputs").show();
  });

});


// activityArray.push(Object.values(user.activities[user.currentId]));
// activityArray.push(Object.values(user.activities[2]));
// activityArray.push(Object.values(user.activities[3]));
// activityArray.push(Object.values(user.activities[4]));