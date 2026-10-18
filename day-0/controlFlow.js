const isLoggedIn = false;

// data tytpe checking
if (isLoggedIn === true) {
  console.log("Logged in Success");
}

// Rest of the programn
console.log("This line will appear after if statement");

if (isLoggedIn === true) {
  console.log("Logged in Success");
} else {
  console.log("Please log in");
}

// Else if

const userRole = "Manager";
// 0 false
// greater than 0 true -> 1 to infinity
if (userRole === "Admin") {
  console.log("Full Access");
} else if (userRole === "Manager") {
  console.log("Project management access");
} else if (userRole === "Employee") {
  console.log("Task Access");
} else {
  console.log("Unknown role");
}

//Common mistake
const score = 90;

if (score >= 80) {
  console.log("Excellent");
} else if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Needs improvment");
}

// proper ordering

if (score >= 80) {
  console.log("Excellent");
} else if (score >= 50 && score < 80) {
  console.log("Pass");
} else {
  console.log("Needs improvment");
}
