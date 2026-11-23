// Form managment

// Rules for validation in JS
// 1) Validate each required field irrecspective of the HTML required attribute
// 2) Validate email format using regex
// 3) Add only valid data
// 4) Clear the inpiut fields after successful submission
// 5) Show a success message after successful submission
// 6) Show an error message if the submission fails

export function formManagement() {
  const form = document.querySelector("#task-form");
  const name = document.querySelector("#name");

  const email = document.querySelector("#email");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValue = email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // valid email regex pattern abc@gmail.com

    name.value = "";
    email.value = "";

    let error = false;

    if (!emailRegex.test(emailValue)) {
      alert("Invalid email format");
      error = true;
    }

    if (emailValue.trim() === "john@gmail.com") {
      error = true;
    }
    if (error) {
      showMessage("error");
      return;
    } else {
      showMessage("success");
      // Submit the form and insert the user into DB
    }
  });
}

function showMessage(type) {
  if (type === "error") {
    const message = document.querySelector("#form-error-message");
    message.style.display = "block";
    message.textContent = "Form submission failed. Please check the inputs.";
    return;
  }
  const message = document.querySelector("#form-message");
  message.style.display = "block";
  message.textContent = "Form submitted successfully";
}

// Student homework
// Create a form with label, input, submit button, and `#form-message`.
// Prevent the normal submit refresh.
// Reject empty/whitespace-only values.
// Add a valid task to the array and re-render the list.
// After adding, clear and focus the input.
// Test adding with mouse click and the Enter key.

// Definition of Done(100%)
// Uses a submit listener with preventDefault.
// Validates trimmed input.
// Adds a task and updates visible list.
// Provides visible feedback.
