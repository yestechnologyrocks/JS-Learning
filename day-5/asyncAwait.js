// Promise: success and error
// new Promise((resolve, reject))

// Async and Await

// When you write async keyword before function keywork then that function will be converted to Promise
async function getPostsFromServer() {
  // Code API
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/post?userId=10"
  );
  // JS will Wait till we get date
  const posts = await response.json();
  return posts;
}

// getPostsFromServer().then((message) => {
//   console.log(message);
// });
//

// Function which shows the use of tey catch and finally
async function loadPosts() {
  try {
    const posts = await getPostsFromServer();
    console.log(posts);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Operation is completed");
  }
}
// loadPosts();

// Guided practice
// Write `async function showProjectName(shouldSucceed)`.
// It awaits a Promise-returning `loadProject(shouldSucceed)`.
// In try, log the project name. In catch, log `Unable to load project`.
// In finally, log `Project request complete`.
function loadProject(shouldSucceed) {
  return new Promise((resolve, reject) => {
    if (shouldSucceed) {
      resolve({ name: "TV", price: 5000 });
    } else {
      reject("Server is down");
    }
  });
}
async function showProjectName(shouldSucceed) {
  try {
    const project = await loadProject(shouldSucceed);
    console.log(project);
  } catch (error) {
    console.log("Unable to load project", error);
  } finally {
    console.log("Project request complete");
  }
}

showProjectName(false);

// Student homework
// Rewrite a provided `.then().catch()` task loader with async/await and try/catch.
// Create `async function getNumber()` that returns 10. Call it and use `.then()` to log the number.
// Create `async function getTaskTitle()` that awaits a Promise resolving to `Review PR` and returns the title.
// Create a failing Promise and use try/catch to log a friendly message.
// Write one sentence explaining why `const value = asyncFunction()` is not usually the final value.
