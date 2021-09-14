export class User {
  constructor(name) {
    this.name = name;
    this.activities = {};
    this.currentId = 0;
  }
  addActivity(userActivity) {
    userActivity.id = this.assignId();
    this.activities[this.currentId] = userActivity;
  }
  assignId() {
    this.currentId += 1;
    return this.currentId;
  }
}

export class userActivity {
  constructor(activity, time, energy, urgency, loc) {
    this.activity = activity;
    this.time = time;
    this.energy = energy;
    this.urgency = urgency;
    this.loc = loc;
    this.id = 0;
  }
}


// export class userActivity extends User {
//   constructor(activity, time, energy, urgency, loc) {
//     super(activity, time, energy, urgency, loc);
//     this.activity = activity;
//     this.time = time;
//     this.energy = energy;
//     this.urgency = urgency;
//     this.loc = loc;
//     this.id = 0;
//   }
// Fancy User Class for Later

// export class User {
//   constructor(name, email, password, age) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//     this.age = age;
//   }
// }