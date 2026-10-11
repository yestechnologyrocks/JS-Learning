/**
 * In simpler terms, a closure gives an inner function access to the outer function's scope even after the outer
 * function has completely finished executing. This means that the inner function can remember and use variables from
 * the outer function, even if the outer function has already returned.
 * Benefits of Closures:
 * 1) Data Privacy & Encapsulation: JavaScript does not natively have true private variables inside traditional objects/functions.
 * Closures allow you to hide variables from the outside world, exposing only specific methods to interact with them.
 * 2) State Preservation: Closures let a function "remember" data over time.
 * This is heavily utilized in frontend libraries (like the inner workings of React's useState)
 * 3) Callbacks and Asynchronous Code: When you use timers (setTimeout),
 * network requests, or event listeners, the callback function remembers the variables surrounding it when it was created
 * @returns {Object} An object with methods to manipulate the counter
 */
function createCounter() {
  let count = 0; // Private variable

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.count); // undefined (cannot access directly!)
