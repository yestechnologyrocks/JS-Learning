// State in promises: Pending, Fulfilled, Rejected
// const taskPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Review my PR"); // Fulfilled state
//   }, 1000);
// });

// It will execute later point of time
// 2 args: resolve, reject
// promise is successfull: you need to call resolve
// promise is unscusscefull: you need to call reject
// new Promise: Promise is t class in JS that is why new keyword
// setTimeout is not required in Promise always. you can or you may not use it
// Promise has 3 methods called as .then, .catch, .finally

function submitTasks(taskTitle) {
  return new Promise((resolve, reject) => {
    console.log("Task submission started..."); // Pending state

    setTimeout(() => {
      if (!taskTitle || taskTitle === "") {
        reject("Task title is required"); // Promise is REJECTED
        return;
      }

      const createdTask = {
        id: 1,
        title: taskTitle,
        status: "TODO",
      };

      resolve(createdTask); // Promise is SUCCESS
    }, 2000);
  });
}

submitTasks("")
  .then((title) => {
    console.log("Success: ", title);
  })
  .catch((error) => {
    console.log("We got an Error: ", error);
  });

//
