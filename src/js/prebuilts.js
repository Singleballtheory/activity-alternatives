import {User, userActivity} from '/activities.js';

export let hike = new userActivity("take a hike", "120", "medium", "low", "outside");


// let testUser = new User();
// function displayActivityDetails(userToDisplay) {
//   let activityList = $("ul#activityList");
//   let htmlForActivity = "";
//   Object.keys(userToDisplay.userActivity).forEach(function(key) {
//     const activ = userToDisplay.findActivity(key);
//     htmlforActivity += "<li id=" + activ.id + ">" + activ.firstName + " " + activ.lastName + "</li>"
//   });
//   activityList.html(htmlForActivity);
// }
// // User Interface logic
// let addressBook = new AddressBook();

// function displayContactDetails(addressBookToDisplay) {
//   let contactsList = $("ul#contacts");
//   let htmlForContactInfo = "";
//   Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
//     const contact = addressBookToDisplay.findContact(key);
//     htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
//   });
//   contactsList.html(htmlForContactInfo);
// }