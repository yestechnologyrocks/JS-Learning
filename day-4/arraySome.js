// Array.some if atleast one item is matched. returns boolean value
const tasks = [
  { id: 1, title: "Review PR", status: "TODO" }, //0
  { id: 2, title: "Update profile", status: "DONE" }, //1
  { id: 3, title: "Check the profile", status: "DONE" },
  { id: 4, title: "Delete the PR", status: "CLOSED" },
];

const doneTasks = tasks.some((task) => task.status === "DONE");
console.log(doneTasks);
