// Pure Function Example, same input will always return the same output and has no side effects
// Benefits of Pure Functions: Easier to test, debug, and reason about.
// They are also more predictable and can be memoized for performance optimization.
// Testing Pure Functions: Since pure functions always produce the same output for the same input,
// they are easier to test. You can simply call the function with specific inputs and check if the
// output matches the expected result.
function add(a, b) {
  return a + b;
}

// Unpure Function Example, same input may return different output or has side effects
function randomNumber() {
  return Math.random(); // Not a pure function, as it returns different output for the same input
}

// Unpure function example, API call, same input may return different output or has side effects
function get10LatestUsersFromAPI() {
  return fetch("https://api.example.com/users?limit=10");
}
