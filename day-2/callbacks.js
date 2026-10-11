/**
 * Callback Function are functions that are passed as arguments to other functions and
 * are executed after the completion of that function.
 *
 *
 * @param {*} taskTitle Sting
 * @param {*} afterFinish function
 */
function finishTask(taskTitle, afterFinish) {
  console.log("Task Title: " + taskTitle);
  console.log("Task Finished");
  afterFinish();
}

finishTask("Complete Assignment", function () {
  let c = 4 + 5;
  console.log("Callback Function Executed", c);
});
