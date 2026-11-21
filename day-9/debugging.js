// Debug the program in JS for any JS bug
// Problem: taskList reponse shows undefined or empty object like {}
// Hypothesis: listTasks returns a Response, not an array
// Evidece: console.log("taskList reponse: ", taskList); shows undefined or empty object like {}
// Fix: add await to the fetchData() function call in app.js
// Regression check or test: task titles are displayed on the page and task count is updated correctly

// Debug the web application
// Problem: I want to understand the working on any website
// Plan: Is given below
// 1) Go to the network tab
// 2) Check the assets like HTML, CSS, JS, Images and HTTPS calls
// 3) Check the request and response of the API call

// Ways of debugging the program
// Option 1: To add console.log statements in the code to check the values of variables and the flow of the program. This can help identify where the problem is occurring and what values are being returned.
// Option 2: Add the debugger in browser console-> source tab-> click on the line number to add a breakpoint. This will pause the execution of the code at that line, allowing you to inspect the values of variables and step through the code line by line to identify where the problem is occurring.
// Option 3: Add debugger; statement in code and open the console -> source tab. This will pause the execution of the code at that line, allowing you to inspect the values of variables and step through the code line by line to identify where the problem is occurring.

// Homework: Follow the file here: day-9/posts-debugging-homework/dist/index.html

const fetchData = async () => {
  debugger;
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log("Getting response?", response);
    if (!response.ok) {
      console.log("response.ok is not working?", response.ok);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
