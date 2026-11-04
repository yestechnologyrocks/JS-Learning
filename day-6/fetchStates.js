// Response .ok is true for any response,
// so a fetch Promise can resolve even when the API returns 404 because

// Focused function
async function fetchData() {
  // Job 1: Fetching the data
  const reponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=10"
  );
  return reponse;
}

// Focused function: Focussing on processing the response only. The response can be any object
function processReponse(reponse) {
  // Job 2: Processing the data
  if (reponse.status === 200) {
    console.log("Data fetched successfully");
  } else if (reponse.status === 404) {
    console.log("Data not found");
  }
}
const response = await fetchData();
processReponse(response);

function createLiInHTML(tasks) {
  const taskList = document.querySelector("#task-list");

  tasks.forEach((task) => {
    const item = document.createElement("li");
    item.textContent = task.title;
    taskList.appendChild(item);
  });
}
