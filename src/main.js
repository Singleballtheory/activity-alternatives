import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {User, userActivity} from './js/activities.js';
// import prebuiltArray from './js/prebuilts.js';
// import quoteService from './js/quotes.js';

// let promise = quoteService.getQuote();
// promise.then(function(response) {
//   const quote = JSON.parse(response);
//   console.log(quote.h);
//   $('#quote').html(`${quote.h}`);
// });

$(document).ready(function() {
  let user;
  let activityArray = [];
  $('#submitUser').click(function(event) {
    event.preventDefault();
    const name = $('#nameInput').val();
    user = new User(name);
    console.log(user);
    $('#nameDisplay').html(`${user.name}`);
    $('#titleLine').hide();
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
    // const newActivity2 = new userActivity("prance", "60", "medium", "high", "outside");
    // const newActivity3 = new userActivity("drive rocket", "120", "high", "high", "outside");
    // const newActivity4 = new userActivity("take a nice nap", "30", "low", "medium", "at home");
    user.addActivity(newActivity);
    // user.addActivity(newActivity2);
    // user.addActivity(newActivity3);
    // user.addActivity(newActivity4);
    activityArray.push(Object.values(user.activities[user.currentId]));
    console.log(user.findActivity(2), "this is the findActivity console log");

    $('#activityDisplay').html(`${newActivity.activity + " " + newActivity.time + " " +  newActivity.energy + " " +  newActivity.urgency + " " + newActivity.loc + " " + newActivity.id}`);
    return newActivity;

  });

  $('#showActivities').click(function(event) {
    event.preventDefault();
    $('#activityDisplay').html(`${JSON.stringify(user.activities)}`);
  
    // activityArray.push(Object.values(user.activities[user.currentId]));
    // activityArray.push(Object.values(user.activities[2]));
    // activityArray.push(Object.values(user.activities[3]));
    // activityArray.push(Object.values(user.activities[4]));

    // "1":{"activity":"Run","time":"15","energy":"low","urgency":"low","loc":"at home","id":1},

    // 0: Activity Name | 1: Time | 2: Energy | 3: Urgency | 4: Home/Away | 5: ID
    
    $('#energyCheck').click(function(event) {
      event.preventDefault();
      for (let i = 0; i < activityArray.length; i++) { 
        if (activityArray[i][2] === "low") {
          console.log("low" + " " + activityArray[i][0]);
        } else if (activityArray[i][2] === "medium") {
          console.log("medium" + " " + activityArray[i][0]);
        } else {
          console.log("high" + " " + activityArray[i][0]);
        }
      }
    });

  });
});