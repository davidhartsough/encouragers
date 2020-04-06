const subgoal = {
  name: "",
  target: "",
  dateTime: null,
  verification: "",
  reward: "",
  timeSlots: [],
};
const mockRunningGoal = {
  id: "_mockrunninggoal_",
  groups: ["runningClub"],
  viewers: ["steve", "stephanie"],
  partners: ["steve"],
  title: "Run Robie Creek",
  tags: ["running", "fitness"],
  wellbeingDomains: ["exercise", "accomplishment"],
  resources: ["runnersworld.com"],
  meaning: "Proving to myself I matter as a person",
  benifits: [
    "cardio-vascular health",
    "feeling of accomplisment",
    "big running legs",
    "booty",
    "lose weight",
    "spend time outdoors",
  ],
  subgoals: [
    {
      name: "Week 1",
      strategy:
        "run 5 times this week alternating flat and hills, with one long run on the weekend. dont over-do it.",
      target: "",
      subtasks: [
        {
          name: "easy 35 min run",
          timeSlot: {
            startTime: "16:00",
            endTime: "16:40",
            date: "2020-03-02",
            completed: false,
          },
        },
        {
          name: "easy 35 min run hills",
          timeSlot: {
            startTime: "16:00",
            endTime: "16:40",
            date: "2020-03-03",
            completed: false,
          },
        },
        {
          name: "easy 35 min run",
          timeSlot: {
            startTime: "16:00",
            endTime: "16:40",
            date: "2020-03-04",
            completed: false,
          },
        },
        {
          name: "easy 35 min run hills",
          timeSlot: {
            startTime: "16:00",
            endTime: "16:40",
            date: "2020-03-05",
            completed: false,
          },
        },
        {
          name: "easy 35 min run hills",
          timeSlot: {
            startTime: "16:00",
            endTime: "16:40",
            date: "2020-03-05",
            completed: false,
          },
        },
      ],
      dateTime: "2020-03-07T12:00:00",
      verification: "",
      reward: "no",
      timeSlots: null,
      completed: false,
    },
    {
      name: "Week 2",
      strategy:
        "run 5 times this week alternating flat and hills, with one long run on the weekend. dont over-do it.",
      target: "",
      subtasks: [
        {
          name: "easy 35 min run",
          timeSlot: {
            startTime: "16:00",
            endTime: "16:40",
            date: "2020-03-09",
            completed: false,
          },
        },
        {
          name: "easy 35 min run hills",
          timeSlot: {
            startTime: "16:00",
            endTime: "16:40",
            date: "2020-03-10",
            completed: false,
          },
        },
        {
          name: "easy 35 min run",
          timeSlot: {
            startTime: "16:00",
            endTime: "16:40",
            date: "2020-03-11",
            completed: false,
          },
        },
        {
          name: "easy 35 min run hills",
          timeSlot: {
            startTime: "16:00",
            endTime: "16:40",
            date: "2020-03-12",
            completed: false,
          },
        },
        {
          name: "easy 35 min run hills",
          timeSlot: {
            startTime: "16:00",
            endTime: "16:40",
            date: "2020-03-14",
            completed: false,
          },
        },
      ],
      dateTime: "2020-03-15T12:00:00",
      verification: "",
      reward: "no",
      timeSlots: null,
      completed: false,
    },
    {
      name: "Week 3",
      strategy:
        "run 5 times this week alternating flat and hills, with one long run on the weekend. dont over-do it.",
      target: "",
      subtasks: [
        {
          name: "easy 35 min run",
          timeSlot: {
            startTime: "16:00",
            endTime: "16:40",
            date: "2020-03-16",
            completed: false,
          },
        },
        {
          name: "easy 35 min run hills",
          timeSlot: {
            startTime: "16:00",
            endTime: "16:40",
            date: "2020-03-17",
            completed: false,
          },
        },
        {
          name: "easy 35 min run",
          timeSlot: {
            startTime: "16:00",
            endTime: "16:40",
            date: "2020-03-18",
            completed: false,
          },
        },
        {
          name: "easy 35 min run hills",
          timeSlot: {
            startTime: "16:00",
            endTime: "16:40",
            date: "2020-03-19",
            completed: false,
          },
        },
        {
          name: "easy 35 min run hills",
          timeSlot: {
            startTime: "16:00",
            endTime: "16:40",
            date: "2020-03-21",
            completed: false,
          },
        },
      ],
      dateTime: "2020-03-22T12:00:00",
      verification: "",
      reward: "no",
      timeSlots: null,
      completed: false,
    },
    {
      name: "Week 4",
      strategy:
        "run 5 times this week alternating flat and hills, with one long run on the weekend. dont over-do it.",
      target: "",
      subtasks: [
        {
          name: "easy 35 min run",
          timeSlot: {
            startTime: "16:00",
            endTime: "16:40",
            date: "2020-03-23",
            completed: false,
          },
        },
        {
          name: "easy 35 min run hills",
          timeSlot: {
            startTime: "16:00",
            endTime: "16:40",
            date: "2020-03-24",
            completed: false,
          },
        },
        {
          name: "easy 35 min run",
          timeSlot: {
            startTime: "16:00",
            endTime: "16:40",
            date: "2020-03-25",
            completed: false,
          },
        },
        {
          name: "easy 35 min run hills",
          timeSlot: {
            startTime: "16:00",
            endTime: "16:40",
            date: "2020-03-26",
            completed: false,
          },
        },
        {
          name: "easy 35 min run hills",
          timeSlot: {
            startTime: "16:00",
            endTime: "16:40",
            date: "2020-03-28",
            completed: false,
          },
        },
      ],
      dateTime: "2020-03-29T12:00:00",
      verification: "",
      reward: "no",
      timeSlots: null,
      completed: false,
    },
  ],
  hindrances: ["weather", "injury", "bad-gear", "fatigue", "Time Commitment"],
  endDate: "2020-03-31",
  endTime: "17:00",
  associatedHabits: ["exercise1234"],
  strategy:
    "Train 3-5 times a week to improve cardio-vascular endurance. focus on pacing to reduce risk of engery and burn out. Run a base line mile and set your pace 1-2 mins slower than your base line. Gear: Good shoes (don't skimp), running shorts, soft shirt, water (camelbak, bottle belt, etc), gear for poor weather (rain jacket, pants, gloves), running socks. Get a buddy, it makes things better",
  firstStep: "Get my gear, set it by my door",
  startTime: "Today",
  measurementUnits: "",
  baseline: null,
  target: null,
  mainReward: "Go out to dinner at yoi-tomo all you can eat sushi",
  mainVerification: "Race Results",
  completed: false,
  active: true,
};
const mock = [mockRunningGoal];

export function fetchGoals() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(mock), 250);
  });
}

export function createGoal(goal) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(goal), 250);
  });
}

export function updateGoal(goal) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(goal), 250);
  });
}

export function deleteGoal(goal) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(goal), 250);
  });
}
