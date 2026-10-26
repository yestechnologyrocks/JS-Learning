// Sync programming/ Top to bottom approach
console.log("A");
const addNumber = (a, b) => a + b;
// Asyn Code
// 1st arg is callback function
// 2nd time in miliseconds
// MacroTask:  setTimeOut, setInterval, Timers and events

setTimeout(() => {
  console.log("This code will be executed in future or later point of time");
}, 5000);
//
// let count = 0;
// const intervalId = setInterval(() => {
//   count = count + 1;
//   console.log("This runs every 1 second", count);
//   if (count === 5) {
//     clearInterval(intervalId);
//     console.log("Interval Stopped");
//   }
// }, 1000);
// console.log(addNumber(4, 5));

// Microtask: Promise, async await, Promise callbacks
const taskPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Review my Pull Request");
  }, 1000);
});

taskPromise.then((title) => {
  console.log("I have subscribed the promise=>", title);
});

console.log("D");
// A 9 D This code will be executed in future or later point of time
