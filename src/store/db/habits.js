const mockReadingHabit = {
  id: "4321",
  active: true,
  groups: ["reading-club"],
  viewers: ["steve", "stephanie"],
  partners: ["stephanie"],
  name: "Read 15 minutes a day",
  tags: ["Reading", "Self-improvement", "Learning"],
  wellbeingDomains: ["Leisure"],
  resources: ["Hitchhiker's Guide to the Galaxy"],
  meaning:
    "Always wanted to read this book but never have. Excited about the humor.",
  benifits: ["Improved literacy", "Time to self", "New perspective", "Funnier"],
  badHabit: null,
  cue: "After I brush my teeth and get in bed",
  recurrence: "daily",
  time: "9:00 PM",
  checkInRecurrence: "Monday",
  checkInTime: "12:00 PM",
  endDate: null,
  associatedGoals: ["HHGTTG-Trilogy"],
  enviroment: "Bedroom",
  timeNeeded: 15,
  timeNeededUnit: "minutes",
  verification: "Chapter",
  strategy: "Put phone on DND.",
  measurementType: "duration",
  measurementUnit: "minutes",
  measurement: 15
};

const mockWaterHabit = {
  id: "2314",
  name: "Drink water boy",
  active: false
}
const mockRunningHabit = {
  id: "1234",
  active: false,
  groups: ["running-club"],
  viewers: ["steve", "stephanie"],
  partners: ["stephanie"],
  name: "Run 1 mile a day",
  tags: ["Running", "Self-improvement", "Fitness"],
  wellbeingDomains: ["Exercise"],
  resources: ["Runner's Forum"],
  meaning: "I need to strengthen my body and gain more energy.",
  benifits: ["Strengthening", "Fitness", "More energy", "Better mood"],
  badHabit: null,
  cue: "After I get home from work",
  recurrence: "daily",
  time: "5:30 PM",
  checkInRecurrence: "Monday, Friday",
  checkInTime: "12:00 PM",
  endDate: null,
  associatedGoals: ["Marathon-Training"],
  enviroment: "Five Mile Trail",
  timeNeeded: 30,
  timeNeededUnit: "minutes",
  verification: "Mileage tracker report",
  strategy: "Use new shoes and my favorite podcast",
  measurementType: "unit",
  measurementUnit: "miles",
  measurement: 1
};

const mock = [
  mockReadingHabit,
  mockRunningHabit,
  mockWaterHabit
];

export function fetchHabits() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(mock), 250);
  });
}

export function createHabit(habit) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(habit), 250);
  });
}

export function updateHabit(habit) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(habit), 250);
  });
}

export function deleteHabit(habit) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(habit), 250);
  });
}
