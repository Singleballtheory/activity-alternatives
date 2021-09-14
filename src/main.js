import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {User, userActivity} from './js/activities.js';
// import {hike} from './js/prebuilts.js';

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
    user.addActivity(newActivity);
    user.addActivity(newActivity2);
    console.log(user, user.activities, newActivity.id, "this is the console log");
    $('#activityDisplay').html(`${newActivity.activity + " " + newActivity.time + " " +  newActivity.energy + " " +  newActivity.urgency + " " + newActivity.loc + " " + newActivity.id}`);
    return newActivity;
  });

  $('#showActivities').click(function(event) {
    event.preventDefault();
    $('#activityDisplay').html();
  });
});