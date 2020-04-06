const mockGroup = {
  id: "running-group",
  title: "Running Group",
  members: ["LeoWibbels", "Steve1", "Stephanie1"],
  admins: ["LeoWibbels"],
};

const mock = [
  {
    id: "asdf",
    title: "Cool Group",
    num: 12,
  },
  {
    id: "qwer",
    title: "Family",
    num: 8,
  },
  {
    id: "zxcv",
    title: "Roommates",
    num: 7,
  },
];

export function fetchGroups() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(mock), 250);
  });
}

export function createGroup(group) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(group), 250);
  });
}

export function updateGroup(group) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(group), 250);
  });
}

export function deleteGroup(group) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(group), 250);
  });
}
