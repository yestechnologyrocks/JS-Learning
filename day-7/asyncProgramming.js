// Normal tasks: top to down
// Async tasks: top to down but not in order
// Promise callbacks in microtask queue, so they will be executed after the current task is completed
// Timers setTimeout and setInterval are in macrotask queue, so they will be executed after the current task and microtasks are completed

console.log("Start");
setTimeout(() => {
  console.log("setTimeout 1"); // Macrotask
}, 1000);
Promise.resolve().then(() => {
  console.log("Promise 1"); // Microtask
});
console.log("End");
// Start End Promise 1 setTimeout 1

// Call Stack: work running now
// Browser timer: counts outside the call stack
// Task/Macrotask queue: ready timer callback waits here
const promise = new Promise((resolve, reject) => {
  resolve("Promise Resolved");
});
console.log("1: Start");
promise.then(() => {
  console.log("3: Promise Callback"); // Microtask
});
console.log("2: End");
// 1: Start 2: End 3: Promise Callback
