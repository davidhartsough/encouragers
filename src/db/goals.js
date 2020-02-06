const mock = [];

export function fetchGoals() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(mock), 250);
  });
}

export function createGoal(goal) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(goal), 250);
  });
}

export function updateGoal(goal) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(goal), 250);
  });
}

export function deleteGoal(goal) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(goal), 250);
  });
}
