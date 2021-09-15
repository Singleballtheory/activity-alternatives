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
  findActivity(id) {
    if (this.activities[id] !== undefined) {
      return this.activities[id];
    }
    return false;
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


// so I think maybe what we would want for filtering through the objects would be a loop in a loop. One loop loops through all of the user.activities and inside that loop, there's a loop that checks criteria. Like, does energy === high?





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