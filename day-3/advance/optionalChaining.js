// Option chaining
const employee = {
  name: "Asha",
  manager: null,
};
// console.log(employee.manager?.name); // undefiend

// Nullish Coalescing ?? only replaces null or undefined.
// For counts and boolean values, `??` often preserves the real value.

const managerName = employee.manager?.name ?? "Manager Not assigned";
console.log(managerName);

const taskCount = 0; //
// if(0) // false
console.log(taskCount || "No Data"); // No Data
console.log(taskCount ?? "No Data"); // 0

//Student homework
// Create a task with nested `assignee` information. First make the shallow-copy mistake and observe it. Then fix it using two spread operations.
// Create an employee with `manager: null`. Display the manager name with `?.` and `??`.
// Create another employee with a real manager object. Verify that the same display code prints the manager’s name.
// Use `0 ?? 'No data'` and `0 || 'No data'`. Write a comment explaining the different result.
// Mini-project: make `updateEmployeeCity(employee, city)` that returns a new employee object with only `contact.city` changed.
// Prove the original city remains unchanged.
