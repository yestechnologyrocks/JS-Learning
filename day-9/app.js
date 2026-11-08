// DRY: Don not Repeat Yourself
// {fetchData} is called as named import
// export all functions from taskAPI.js as a single object called task
import * as task from "./taskAPI.js";
import { loadTasks } from "../day-6/pathsInFetch.js";
import { add, subtract } from "./utils.js";

console.log("Addition: ", add(2, 3));
console.log("Substraction: ", subtract(5, 2));
// const data = await fetchData();
loadTasks();
