// break
const tasks = ["Review PR", "STOP", "DONE", "Update profile"];

for (const task of tasks) {
  if (task === "STOP") {
    break; // Stop your loop completely
  }
  console.log(task);
}

// Continue
for (const task of tasks) {
  if (task === "DONE") {
    continue; // Skip this whole iteration
  }
  console.log(task);
}
