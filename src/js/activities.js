export class User {
  constructor(name) {
    this.name = name;
  }
}
export class userActivity extends User {
  constructor(activity, time, energy, urgency, loc) {
    super(activity, time, energy, urgency, loc);
    this.activity = activity;
    this.time = time;
    this.energy = energy;
    this.urgency = urgency;
    this.loc = loc;
  }
}


// Fancy User Class for Later

// export class User {
//   constructor(name, email, password, age) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//     this.age = age;
//   }
// }