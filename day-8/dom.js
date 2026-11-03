// document.querySelector();
// document.querySelectorAll();
// document.createElement();
// const items = document.querySelector("#task-list");
// const item = document.createElement("li");
// item.textContent = "New Task";
// items.appendChild(item);

// Guided practice
// Provide an array of three WorkHub tasks and minimal HTML containing
//  `#task-list` and `#task-count`. Student writes `renderTasks(tasks)` and
//  `renderTaskCount(tasks)`, then adds a fourth task and reruns.

// Refer to HTML

const tasks = [
  { title: "Do the homework", status: "Done" },
  { title: "Task 2", status: "Incomplete" },
  { title: "Task 3", status: "Incomplete" },
];

function taskCount() {
  const count = document.querySelector("#task-count");
  console.log(count.textContent);
}
taskCount();
// Student homework
// Build an HTML page with `#task-count` and an empty `<ul id="task-list">`.
// Create an array of four tasks with title and status.
// Render titles using `createElement`, `textContent`, and `append`.
// Update the count from the same array.
// Create one more html <ul id="task-list-status"> add entries like title -> Status
// Do the Homework: Done
// <ul id="task-list">
// <li><b>{tiltle}</b>: <span>{status}</span></li>
// </ul>

async function getTasks() {
  try {
    const reponse = await fetch(
      "https://jsonplaceholder.typicode.com/photos?albumId=1"
    );
    const albums = await reponse.json();
    const titles = document.querySelector("#task-list");
    albums.forEach((album) => {
      const item = document.createElement("li");
      item.textContent = album.title;
      titles.appendChild(item);
    });
  } catch (error) {
    console.log("Error fetching data");
  }
}
getTasks();
