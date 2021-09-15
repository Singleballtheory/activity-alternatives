import {userActivity} from './activities.js';
let hike = new userActivity("Take a hike", "120", "medium", "low", "outside");
let bike = new userActivity("Go on a bike ride", "60", "high", "low", "outside");
let puzzle = new userActivity("Work on a puzzle", "60", "low", "low", "at home");
let meditate = new userActivity("Meditate for a bit", "30", "low", "low", "at home");

export let prebuiltArray = [hike, bike, puzzle, meditate]


