const isLoggedIn = true;
// Long syntax
if (isLoggedIn === true) {
  console.log("Logged in Success");
} else {
  console.log("Please log in");
}

// Ternary
const statusMessage = isLoggedIn ? "Logged in Success" : "Please log in";
console.log(statusMessage);
