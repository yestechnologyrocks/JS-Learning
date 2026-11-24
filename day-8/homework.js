// 1. **Show employee count**

// Create an `employees` array with 4 employee objects. Show the count inside:

// ```html
// <p id="employee-count">Employees: 0</p>
// ```

// Expected output:

// ```text
// Employees: 4
// ```

// 2. **Render task titles**

// Create an array with three task objects. Render every task title as an `<li>` inside:

// ```html
// <ul id="task-list"></ul>
// ```

// Use `document.createElement()`, `textContent`, and `append()`.

// 3. **Add task through a form**

// Create a form with:

// - Task title input
// - Add Task button
// - Empty `<ul id="task-list"></ul>`

// On form submit:

// - Use `event.preventDefault()`
// - Read and trim the input value
// - Add a task object to the array
// - Re-render the task list
// - Clear the input

// 4. **Validate an empty task title**

// Extend Homework 3. If the student submits an empty or spaces-only task title:

// - Do not add a task
// - Display `Please enter a task title` in:

// ```html
// <p id="form-message" role="status"></p>
// ```

// For a valid task, clear the error message.

// 5. **Mini WorkHub task board**

// Create a small page with:

// - A heading: `WorkHub Tasks`
// - Task count
// - Task-add form
// - Validation message
// - Rendered task list

// Start with two tasks. The student must be able to add a third task using both the **Add Task** button and the **Enter** key.

// 6. **Task status filter**

// Start with tasks having `TODO` and `DONE` statuses.

// ```js
// const tasks = [
//   { id: 1, title: "Review PR", status: "TODO" },
//   { id: 2, title: "Test login", status: "DONE" },
//   { id: 3, title: "Update dashboard", status: "TODO" }
// ];
// ```

// Add two buttons:

// ```html
// <button id="show-all">All</button>
// <button id="show-todo">TODO</button>
// ```

// Requirements:

// - Clicking **All** shows every task.
// - Clicking **TODO** shows only tasks with status `"TODO"`.
// - Update the visible task count after each filter.
// - Reuse one `renderTasks(tasksToRender)` function.
