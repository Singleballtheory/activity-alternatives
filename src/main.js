import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {User, userActivity} from './js/activities.js';
import {prebuiltArray} from './js/prebuilts.js';
import Service from './js/quotes.js';



$(document).ready(function() {
  let user;
  let activityArray = [];
  let promise = Service.getQuote();
  promise.then(function(response) {
    const body = JSON.parse(response);
    let i = body[Math.floor(Math.random()*body.length)];
    $('#quote').html("' " + i.text + " '");
    $('#author').html("— " + i.author);
  });
  $('#submitUser').click(function(event) {
    event.preventDefault();
    const name = $('#nameInput').val();
    user = new User(name);
    console.log(user);
    $('#nameDisplay').html(`${user.name}`);
    $("#usersName").show();
    $("#yourName").hide();
    $("#activityInputs").show();
    $("#findActiv").show();
    $("#randomActivity").show();
    return user;
  });

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

    let displayList = $("ul#userListBase");
    let htmlForDisplay = "";
    // Start full info display version
    for (let i = 0; i < activityArray.length; i++) {
      htmlForDisplay += "<li id=" + this.currentId + ">" + activityArray[i][0] + "<ul>" + "<li>Urgency:" + activityArray[i][3] + "</li>" + "<li>Required Time:" + activityArray[i][1] + "</li>" + "<li>Required Energy:" + activityArray[i][2] + "</li>" + "<li>Home or Away?:" + activityArray[i][4] + "</li>" + "</ul></li>";
      displayList.html(htmlForDisplay);
    }
    // End full info display version

  });

  $('#randomActivity').click(function(event) {
    event.preventDefault();
    let randomActivity = prebuiltArray[Math.floor(Math.random()*prebuiltArray.length)];
    console.log(randomActivity);
    $('#randomAct').html(`${randomActivity.activity}`);
  });

  let timeMatchArray = [];
  let displayList = $("ul#displayArray");
  let htmlForDisplay = "";
  $('#timeCheck').click(function(event) {
    event.preventDefault();
    $("#advFilters").show();
    const userTime = $("input#timeAvail").val();
    const userEnergy = $("select#energyAvail").val();
    for (let i = 0; i < activityArray.length; i++) {
      if (parseInt(activityArray[i][1]) <= parseInt(userTime)) {
        timeMatchArray.push(activityArray[i]);
        console.log(timeMatchArray);
        console.log(userEnergy + " userEnergy");
        console.log(activityArray[i][2] + activityArray[i][0]+ "current index energy");
        htmlForDisplay = "";
        for (let i = 0; i < timeMatchArray.length; i++) {
          htmlForDisplay += "<li id=" + this.currentId + ">" + activityArray[i][0] + "<ul>" + "<li>Urgency:" + activityArray[i][3] + "</li>" + "<li>Required Time:" + activityArray[i][1] + "</li>" + "<li>Required Energy:" + activityArray[i][2] + "</li>" + "<li>Home or Away?:" + activityArray[i][4] + "</li>" + "</ul></li>";
          displayList.html(htmlForDisplay);
        }
      } else {
        if (timeMatchArray === []) {
          htmlForDisplay += "<li> No matches</li>";
          displayList.html(htmlForDisplay);
        }
      }
    }
  });

  // Start of Advanced Activity Filters
  let finalArray = [];
  $('input[name=low]').change(function(){
    finalArray = [];
    if($(this).is(':checked')) {
      for (let i = 0; i < timeMatchArray.length; i++) {
        if (parseInt(timeMatchArray[i][2]) === parseInt("1")) {
          finalArray.push(activityArray[i]);
          htmlForDisplay = "";
          for (let i = 0; i < finalArray.length; i++) {
            htmlForDisplay += "<li id=" + this.currentId + ">" + finalArray[i][0] + "<ul>" + "<li>Urgency:" + finalArray[i][3] + "</li>" + "<li>Required Time:" + finalArray[i][1] + "</li>" + "<li>Required Energy:" + finalArray[i][2] + "</li>" + "<li>Home or Away?:" + finalArray[i][4] + "</li>" + "</ul></li>";
            displayList.html(htmlForDisplay);
          }
        } else {
          if (timeMatchArray === []) {
            htmlForDisplay += "<li> No matches</li>";
            displayList.html(htmlForDisplay);
          }
        }
      }
    }
  });

  $('input[name=medium]').change(function(){
    finalArray = [];
    if($(this).is(':checked')) {
      for (let i = 0; i < timeMatchArray.length; i++) {
        if (parseInt(timeMatchArray[i][2]) <= parseInt("2")) {
          finalArray.push(activityArray[i]);
          htmlForDisplay = "";
          for (let i = 0; i < finalArray.length; i++) {
            htmlForDisplay += "<li id=" + this.currentId + ">" + finalArray[i][0] + "<ul>" + "<li>Urgency:" + finalArray[i][3] + "</li>" + "<li>Required Time:" + finalArray[i][1] + "</li>" + "<li>Required Energy:" + finalArray[i][2] + "</li>" + "<li>Home or Away?:" + finalArray[i][4] + "</li>" + "</ul></li>";
            displayList.html(htmlForDisplay);
          }
        } else {
          if (timeMatchArray === []) {
            htmlForDisplay += "<li> No matches</li>";
            displayList.html(htmlForDisplay);
          }
        }
      }
    }
  });

  $('input[name=high]').change(function(){
    finalArray = [];
    if($(this).is(':checked')) {
      for (let i = 0; i < timeMatchArray.length; i++) {
        if (parseInt(timeMatchArray[i][2]) <= parseInt("3")) {
          finalArray.push(activityArray[i]);
          htmlForDisplay = "";
          for (let i = 0; i < finalArray.length; i++) {
            htmlForDisplay += "<li id=" + this.currentId + ">" + finalArray[i][0] + "<ul>" + "<li>Urgency:" + finalArray[i][3] + "</li>" + "<li>Required Time:" + finalArray[i][1] + "</li>" + "<li>Required Energy:" + finalArray[i][2] + "</li>" + "<li>Home or Away?:" + finalArray[i][4] + "</li>" + "</ul></li>";
            displayList.html(htmlForDisplay);
          }
        } else {
          if (timeMatchArray === []) {
            htmlForDisplay += "<li> No matches</li>";
            displayList.html(htmlForDisplay);
          }
        }
      }
    }
  });
  // End of Advanced Activity Filters

  // 0: Activity Name | 1: Time | 2: Energy | 3: Urgency | 4: Home/Away | 5: ID

  $('#activityInputs').click(function(event) {
    event.preventDefault();
    $("#activityInputForms").show();
    $("#activityInputs").hide();
    $("#doneAdding").show();
    $("#findActiv").hide();
    $("#randomActivity").hide();
    $("#randomAct").hide();
  });
  
  $('#findActiv').click(function(event) {
    event.preventDefault();
    $("#checkForm").show();
    $("#moreActivityInputs").show();
    $("#activityInputs").hide();
    $("#activityDisplay").show();
    $("#randomAct").show();
  });

  $("#doneAdding").click(function(event) {
    event.preventDefault();
    $("#activityInputForms").hide();
    $("#doneAdding").hide();
    $("#activityInputs").show();
    $("#findActiv").show();
    $("#randomActivity").show();
  });

  $("#moreActivityInputs").click(function(event) {
    event.preventDefault();
    $("#activityInputForms").show();
    $("#activityInputs").hide();
    $("#doneAdding").show();
    $("#findActiv").hide();
    $("#randomActivity").hide();
    $("#moreActivityInputs").hide();
    $("#timeAvail").hide();
    $("#timeAvail2").hide();
    $("#timeCheck").hide();
    $("#activityDisplay").hide();
    $("#randomAct").hide();
    $("#displayArray").hide();
  });

});
