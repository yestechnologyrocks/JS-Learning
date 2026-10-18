// && And operator: both conditions must be true.
// || Or Operator:  at least one condition must be true.
// ! Negation: reverses a boolean value.

const userRole = "Manager";
const isActive = true;
// 0 false
// greater than 0 true -> 1 to infinity
// From left to right
if ((userRole === "Admin" || userRole === "Manager") && isActive === true) {
  console.log("User can access the project");
}

// Negation
const isLoggedIn = false;
if (!isLoggedIn) {
  console.log("Show login page");
}
