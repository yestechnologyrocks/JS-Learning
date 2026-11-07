console.log("1");

setTimeout(() => {
  // New Scope
  Promise.resolve().then(() => {
    console.log("3"); // Microtask
  });
  console.log("2");
}, 1000);

Promise.resolve().then(() => {
  console.log("4"); // Microtask
});
console.log("5");
//1, 5, 4, 3, 2

// Guided practice
// Have the student complete three supplied traces:
// 1) basic timer, setTimeout,
// 2) Promise plus timer,: promise{setTimeout}
// 3) nested Promise inside timer: setTimeout{promise{setTimeout}}}
// Review only after she has written reasoning for all three.
