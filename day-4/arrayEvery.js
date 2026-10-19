// Array.every: If all the items matched.  returns boolean value
const tasks = [
  { id: 1, title: "Review PR", status: "TODO" }, //0
  { id: 2, title: "Update profile", status: "DONE" }, //1
  { id: 3, title: "Check the profile", status: "DONE" },
  { id: 4, title: "", status: "CLOSED" },
];
const checkNonEmptyTitles = tasks.every((task) => task.title !== "");
console.log(checkNonEmptyTitles);
