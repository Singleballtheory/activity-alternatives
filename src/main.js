import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {User, userActivity} from './js/activities.js';

$(document).ready(function() {
  $('#submitUser').click(function(event) {
    event.preventDefault();
    const name = $('#nameInput').val();
    const user = new User(name);
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
    console.log(newActivity);
    $('#activityDisplay').html(`${newActivity.activity + " " + newActivity.time + " " +  newActivity.energy + " " +  newActivity.urgency + " " + newActivity.loc}`);
    return newActivity;
  });
});