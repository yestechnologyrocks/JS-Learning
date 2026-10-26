const steps = [
  {
    line: null,
    stack: [],
    browser: [],
    microtasks: [],
    macrotasks: [],
    output: [],
    message: "Start with the code at the top. JavaScript begins by reading synchronous lines from top to bottom."
  },
  {
    line: "1",
    stack: ["console.log('A')"],
    browser: [],
    microtasks: [],
    macrotasks: [],
    output: ["A"],
    message: "Line 1 runs immediately on the call stack, so A is printed first."
  },
  {
    line: "2",
    stack: [],
    browser: ["Timer: 0 ms"],
    microtasks: [],
    macrotasks: ["console.log('B')"],
    output: ["A"],
    message: "Line 2 gives the timer to the browser. Its callback waits in the macrotask queue; setTimeout(..., 0) does not mean “run immediately.”"
  },
  {
    line: "3",
    stack: [],
    browser: ["Timer: 0 ms"],
    microtasks: ["console.log('C')"],
    macrotasks: ["console.log('B')"],
    output: ["A"],
    message: "Line 3 schedules the Promise callback. Promise callbacks wait in the microtask queue."
  },
  {
    line: "4",
    stack: ["console.log('D')"],
    browser: ["Timer: 0 ms"],
    microtasks: ["console.log('C')"],
    macrotasks: ["console.log('B')"],
    output: ["A", "D"],
    message: "Line 4 is still synchronous, so D prints before JavaScript looks at either queue."
  },
  {
    line: "3",
    stack: ["console.log('C')"],
    browser: ["Timer: 0 ms"],
    microtasks: [],
    macrotasks: ["console.log('B')"],
    output: ["A", "D", "C"],
    message: "The call stack is now empty. JavaScript drains all microtasks before taking a macrotask, so C prints next."
  },
  {
    line: "2",
    stack: ["console.log('B')"],
    browser: [],
    microtasks: [],
    macrotasks: [],
    output: ["A", "D", "C", "B"],
    message: "With no microtasks left, JavaScript takes the timer callback from the macrotask queue. B prints last."
  }
];

const views = {
  stack: document.getElementById("call-stack"),
  browser: document.getElementById("browser-apis"),
  microtasks: document.getElementById("microtasks"),
  macrotasks: document.getElementById("macrotasks"),
  output: document.getElementById("console-output")
};

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const resetButton = document.getElementById("reset");
const explanation = document.getElementById("explanation");
const stepCounter = document.getElementById("step-counter");
let currentStep = 0;

function renderTokens(element, values) {
  element.replaceChildren();

  if (values.length === 0) {
    const empty = document.createElement("span");
    empty.className = "empty";
    empty.textContent = "Empty";
    element.append(empty);
    return;
  }

  values.forEach((value) => {
    const token = document.createElement("span");
    token.className = "token";
    token.textContent = value;
    element.append(token);
  });
}

function render() {
  const step = steps[currentStep];

  renderTokens(views.stack, step.stack);
  renderTokens(views.browser, step.browser);
  renderTokens(views.microtasks, step.microtasks);
  renderTokens(views.macrotasks, step.macrotasks);
  renderTokens(views.output, step.output);

  document.querySelectorAll("[data-line]").forEach((line) => {
    line.classList.toggle("active", line.dataset.line === step.line);
  });

  explanation.textContent = step.message;
  stepCounter.textContent = `Step ${currentStep} of ${steps.length - 1}`;
  previousButton.disabled = currentStep === 0;
  nextButton.disabled = currentStep === steps.length - 1;
  nextButton.textContent = currentStep === steps.length - 1 ? "Demo complete" : "Next step →";
}

previousButton.addEventListener("click", () => {
  currentStep = Math.max(0, currentStep - 1);
  render();
});

nextButton.addEventListener("click", () => {
  currentStep = Math.min(steps.length - 1, currentStep + 1);
  render();
});

resetButton.addEventListener("click", () => {
  currentStep = 0;
  render();
});

render();
