const mockGroup = {
  id: "asdf",
  name: ""
};

const mock = [
  {
    id: "asdf",
    name: "Cool Group",
    num: 12
  },
  {
    id: "qwer",
    name: "Family",
    num: 8
  },
  {
    id: "zxcv",
    name: "Roommates",
    num: 7
  }
];

export function fetchGroups() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(mock), 250);
  });
}

export function createGroup(group) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(group), 250);
  });
}

export function updateGroup(group) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(group), 250);
  });
}

export function deleteGroup(group) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(group), 250);
  });
}
