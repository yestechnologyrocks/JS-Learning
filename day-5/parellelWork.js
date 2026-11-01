// Parallel work: If two or more operations do not need each other's results
// to complete, they can be started at the same time.
// This is called parallel work.

function getTasks() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Task 1", "Task 2", "Task 3"]);
    }, 1000);
  });
}
function getProjects() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(["Project 1", "Project 2", "Project 3"]);
    }, 1000);
  });
}

function getCurrentUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 1000);
  });
}
function loadMyDashboardData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userId: userId, dashboard: "User Dashboard Data" });
    }, 1000);
  });
}
// async function loadMyDashboard() {
//   const tasksPromise = getTasks();
//   const projectsPromise = getProjects();

//   const tasks = await tasksPromise;
//   const projects = await projectsPromise;

//   return { tasks, projects };
// }

// loadMyDashboard().then((data) => {
//   console.log(data);
// });

// Promise.all() is a method that takes an array of
// promises and returns a single promise that
// resolves when all of the promises in the array have resolved,
// or rejects if any of the promises in the array reject.

// It resolves when every promise succeds
// If one Promise rejects, this method rejects all.
// use try/catch to handle the error.
// async function loadMyDashboardData() {
//   const [tasks, projects] = await Promise.all([getTasks(), getProjects()]);
//   return { tasks, projects };
// }

async function loadMyDashboardDataWithErrorHandling() {
  try {
    const [tasks, projects] = await Promise.all([getTasks(), getProjects()]);
    return { tasks, projects };
  } catch (error) {
    console.log("Promise.all(): Error loading dashboard data:", error);
    throw error; // rethrow the error if needed
  }
}

console.log("Promise .all() with error handling:");

loadMyDashboardDataWithErrorHandling()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(
      "Promise.all(): Caught an error while loading dashboard data:",
      error
    );
  });

// Promise.allSettled() is a method that takes an array of promises
//  and returns a single promise that resolves when all of the promises
// in the array have settled (either resolved or rejected).
// It returns an array of objects that describe the outcome of each promise.

console.log(
  "Using Promise.allSettled to handle multiple promises with different outcomes:"
);
const promises = [getTasks(), getProjects()];

Promise.allSettled(promises).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log(
        "Promise.allSettled(): Promise fulfilled with value:",
        result.value
      );
    } else {
      console.log(
        "Promise.allSettled(): Promise rejected with reason:",
        result.reason
      );
    }
  });
});

// Guided practice: WorkHub dashboard loader
// Give the student stub functions `getTasks`, `getProjects`, and `getCurrentUser`.
// Ask her to write two functions: `loadMyTasks` should run sequentially because
// it needs user.id; `loadDashboardData` should load tasks and projects in
// parallel with Promise.all.

async function loadMyTasks() {
  const user = await getCurrentUser();
  const dashboard = await loadMyDashboardData(user.id);

  const [userData, dashboardData] = await Promise.all([user, dashboard]);

  return { userData, dashboardData };
}
loadMyTasks().then((data) => {
  console.log("loadMyTasks():", data);
});

// Student homework
// Write two comments: one example of sequential async work and one example of parallel async work in WorkHub.
// Create two functions returning delayed Promises: `getTasks()` and `getProjects()`. Use Promise.all to load both.
// Wrap the Promise.all call in try/catch. Make one function reject once to see the error path.
// Write `loadUserProfile()` that first awaits getCurrentUser(), then awaits getProfile(user.id).
// Explain why this should be sequential.
// Optional: research `Promise.allSettled` and write one sentence about when it might help.
