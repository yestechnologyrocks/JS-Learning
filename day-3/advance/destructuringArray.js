// Destructuring of Array
const statuses = ["TODO", "IN_PROGRESS", "DONE", "REJECTED"];

const firstStatus = statuses[0]; // TODO
const secondStatus = statuses[1];

const [first, second, third] = statuses;
console.log(first, second, third);
