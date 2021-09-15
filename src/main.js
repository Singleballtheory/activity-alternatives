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
    const newActivity2 = new userActivity("prance", "60", "medium", "high", "outside");
    const newActivity3 = new userActivity("drive rocket", "120", "high", "high", "outside");
    const newActivity4 = new userActivity("take a nice nap", "30", "low", "medium", "at home");
    user.addActivity(newActivity);
    user.addActivity(newActivity2);
    user.addActivity(newActivity3);
    user.addActivity(newActivity4);
    console.log(user.findActivity(2), "this is the findActivity console log");

    $('#activityDisplay').html(`${newActivity.activity + " " + newActivity.time + " " +  newActivity.energy + " " +  newActivity.urgency + " " + newActivity.loc + " " + newActivity.id}`);
    return newActivity;

  });

  $('#showActivities').click(function(event) {
    event.preventDefault();
    $('#activityDisplay').html(`${JSON.stringify(user.activities)}`);
    let newArray = (`${JSON.stringify(user.activities)}`).split("},");
    console.log(newArray + "this is the new array" + newArray[0]);
    // let arrayTest2 = ((`${JSON.stringify(user.activities)}`).replace(/['"]+/g, '').replace(/[{}]/g, ""));
    // console.log(arrayTest2 + "arrayTest2");
    // console.log(arrayTest2[1] + "arrayTest2[1]");
    // console.log("New Array 1" + newArray[0]);
    let newNewArray = Object.entries(user.activities[1]);
    console.log(newNewArray + "newNewArray");
    let thirdArray = Object.values(user.activities[1]);
    console.log(thirdArray + "thirdArray");
    if (thirdArray[4] === "at home") {
      console.log("true");
    } else {
      console.log("poops");
    }
    // 0: Activity Name | 1: Time | 2: Energy | 3: Urgency | 4: Home/Away | 5: ID
  });
});

//{"1":{"activity":"Run","time":"15","energy":"low","urgency":"low","loc":"at home","id":1},"2":{"activity":"prance","time":"60","energy":"medium","urgency":"high","loc":"outside","id":2},"3":{"activity":"drive rocket","time":"120","energy":"high","urgency":"high","loc":"outside","id":3},"4":{"activity":"take a nice nap","time":"30","energy":"low","urgency":"medium","loc":"at home","id":4}}