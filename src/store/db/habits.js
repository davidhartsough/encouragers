const mock = [
  {
    id: "fdsa",
    name: "Brush teeth",
    num: 12
  },
  {
    id: "reqw",
    name: "Work out",
    num: 8
  },
  {
    id: "vcxz",
    name: "Drink water",
    num: 7
  }
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
