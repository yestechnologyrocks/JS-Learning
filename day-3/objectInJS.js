// Why seperate variables when you can group them together in an object?
// Objects allow you to organize related data and functionality in a single structure,
// making your code more readable and maintainable.

const taskTitle = "Review the pull request and provide feedback";
const taskPriority = "High";
const taskStatus = "In Progress";

// An object is a group of named details about one thing.
// Each detail is called a property. Read this example as: “task has an id, title, priority, and status.”

// Object literal syntax
const task = {
  title: "Review the pull request and provide feedback",
  priority: "High",
  status: "In Progress",
  key: "value",
  "Detail Description": "This is a detailed description of the task.",
};

// Explaination of every part
// Curly braces `{ }` start and end the object.
// `title` is a property name; the text after `:` is its value.
// A comma separates one property from the next.
// Use meaningful property names: `taskTitle` is clearer than `t`.

console.log(task);
// Dot notation means: object name, then a dot, then the property name.

console.log(task.title); // Accessing the title property

// Bracket notation means: object name, then brackets with the property name as a string inside.
console.log(task["priority"]); // Accessing the priority property using bracket notation
console.log(task["Detail Description"]); // Accessing the property with spaces in its name

// They can also have methods (functions) that operate on the data within the object,
//  providing encapsulation and reusability.
const tv = {
  title: "Samsung QLED TV",
  price: 999.99,
  features: ["4K Resolution", "Smart TV", "HDR"],
  getTotalPrice: function (taxRate) {
    return this.price + this.price * taxRate;
  },
};
console.log(tv.getTotalPrice(0.5)); // Calling the method to calculate total price with tax

// Change or add a simple property using dot notation

tv.size = "55 inches"; // Adding a new property to the object
console.log(tv);

// Ask the student to create an `employee` object with `id`, `name`, `role`, and `isActive`. Then log the name and role, change `isActive` to false, and add `city`.

// Student homework
// Create a `project` object with `id`, `name`, `description`, and `isActive`. Log two properties.
// Create a `task` object, then change its status from TODO to IN_PROGRESS.
// Create a variable named `propertyToShow` containing `name`. Use bracket notation to log that property from your project object.
// Write one sentence: When would you use an object instead of several separate variables?
// Answer for the last question: You would use an object instead of several separate variables when you want to group related data together,
// making it easier to understand.
