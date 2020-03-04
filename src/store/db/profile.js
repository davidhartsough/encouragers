const mockLeo = {
  username: "LeoWibbels",
  name: "Leo Wibbels",
  email: "wibbels.leoo@gmail.com",
  profilePicture: null,
  public: false,
  connections: ["Stephanie1"]
};
const mockSteve = {
  username: "Steve1",
  name: "Steve",
  email: "Steve@gmail.com",
  profilePicture: null,
  public: false,
  connections: ["Stephanie1"]
};
const mockStephanie = {
  username: "Stephanie1",
  name: "Stephanie",
  email: "Stephanie@gmail.com",
  profilePicture: null,
  public: false,
  connections: ["Steve1", "LeoWibbels"]
};

export function fetchProfile() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(mockLeo), 250);
  });
}
