const uiState = {
  isLoading: false,
  errorMessage: "",
  tasks: [],
};

const loader = document.querySelector("#loading");

async function loadTasks() {
  // Job 1: Fetching the data
  uiState.isLoading = true;
  uiState.errorMessage = "";
  loader.style.display = "block";

  setTimeout(async () => {
    try {
      const reponse = await fetchData();
      if (reponse.status === 200) {
        uiState.tasks = await reponse.json();
        const taskList = document.querySelector("#task-list");

        uiState.tasks.forEach((task) => {
          const item = document.createElement("li");
          item.textContent = task.title;
          taskList.appendChild(item);
        });
        // // createLiInHTML(uiState.tasks)
      } else if (reponse.status === 404) {
        // {}
        uiState.errorMessage = "Data not found";
      }
    } catch (error) {
      uiState.errorMessage = "Error fetching data";
      // new Error("Offline")
    } finally {
      uiState.isLoading = false;
      loader.style.display = "none";
    }
  }, 2000);
}
async function fetchData() {
  // Job 1: Fetching the data
  const reponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=10"
  );
  return reponse;
}
loadTasks();

// Student homework
// Draw four simple task-list screen states: Loading, Success, Empty, Error.
// Add a `renderTaskState()` function that logs one clear message for each state.
// Make listTasks return `[]`; verify that the empty state is different from an error.
// Make listTasks throw `new Error("Offline")`; show a friendly error message.
