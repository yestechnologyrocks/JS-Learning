const [firstTask, ...remainingTasks] = [
  "Review PR",
  "Update profile",
  "Delete unwanted file",
];

console.log(firstTask, remainingTasks);

// Guided practice
// Write a `project` object with `name`, `status`, and `owner`.
// Ask her to destructure name and owner, then create a new copy with status changed to ACTIVE.
// Log both original and new status.

const project = {
  name: "Neha",
  status: "DEACTIVE",
  owner: false,
};
const { name, owner } = project;
console.log(name, owner);

const newProject = { ...project, status: "ACTIVE" };
console.log(project, newProject);

// Student homework
// Destructure `name` and `role` from an employee object. Log them.
// Destructure the first and third items from `const priorities = ['Low', 'Medium', 'High'];`.
// Create `newProjects` using spread to add Reports to an existing `projects` array. Prove the old array has not changed.
// Create a `task` object, then use spread to make a new copy with `status: 'DONE'`. Log both statuses.
// Optional: use rest syntax to put the first project in one variable and all other projects in another array.
