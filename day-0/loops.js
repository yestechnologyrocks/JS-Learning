const statuses = ["TODO", "IN_PROGRESS", "DONE", "REJECTED"];

// statuses[0];
// statuses[1];
// For Loop
for (let i = 0; i < statuses.length; i++) {
  console.log(statuses[i]);
}

// While: Use a `while` loop when the number of repetitions is not as obvious.
// Make sure something inside the loop changes the condition.
let remainingTasks = 3;

while (remainingTasks > 0) {
  console.log("Task Remainig: " + remainingTasks);
  remainingTasks = remainingTasks - 1;
}

console.log("All tasks completed");

// for...of: visit every item in an array
for (const stat of statuses) {
  console.log(stat);
}

const projects = [
  { name: "WorkHub", isActive: true },
  { name: "Website", isActive: false },
];
for (const project of projects) {
  console.log(project.name);
}
