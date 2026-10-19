const tasks = [
  { id: 1, title: "Review PR", status: "TODO" }, //0
  { id: 2, title: "Update profile", status: "DONE" }, //1
];

// Works with Arrays, strings
// Can use break, continue
// Ehere loops needs control
for (const task of tasks) {
  if (task.status === "DONE") {
    console.log("THe task queue is done");
    break;
  }
  console.log(task);
}

// ForEach loop: Arrays only
// Can't use break, continue
// Use for Simple action for every array item
tasks.forEach(function (task, index) {
  console.log("Here is task=>" + task.title);
  console.log("Here is index=>" + index);
});
