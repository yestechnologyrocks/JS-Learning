# JavaScript Learning

Beginner-friendly JavaScript training materials and practice exercises for a returning full-stack developer.

## Training goal

Build confident JavaScript fundamentals before moving into TypeScript, React, Node.js, and the WorkHub full-stack capstone project. The emphasis is on understanding, small experiments, and independent implementation—not memorising syntax.

## JavaScript module plan — 29 hours

| Session | Topic                                      | Hours | Practical outcome                                               |
| ------- | ------------------------------------------ | ----: | --------------------------------------------------------------- |
| JS-01   | Values, Variables & Scope                  |     3 | Use variables, comparisons, and block scope confidently.        |
| JS-02   | Functions, Parameters & Return Values      |     3 | Write reusable functions with clear input and output.           |
| JS-03   | Arrays & Objects: Safe Data Handling       |     4 | Read and update application data safely.                        |
| JS-04   | Array Transformations & Data Thinking      |     3 | Use `map`, `filter`, `find`, and `reduce` intentionally.        |
| JS-05   | Promises & Async/Await Foundations         |     3 | Handle asynchronous success and failure.                        |
| JS-06   | Fetch, HTTP Results & Resilient API Calls  |     4 | Build API calls with loading, empty, success, and error states. |
| JS-07   | Event Loop & Async Ordering                |     3 | Explain synchronous code, microtasks, and timer tasks.          |
| JS-08   | DOM & Events                               |     4 | Build an interactive browser task list.                         |
| JS-09   | Modules, Debugging & Integration Challenge |     2 | Organize a small feature and debug it systematically.           |

## Learning approach

Each session follows this pattern:

1. Recall a concept from the prior session.
2. Predict what a short code example will do.
3. Learn through a small live demonstration.
4. Build a guided exercise.
5. Complete an independent variation or homework task.
6. Review evidence, confidence, feedback, and the next action.

## WorkHub practice domain

Exercises use a small, consistent work-management domain called **WorkHub**. Instead of unrelated examples, practice code uses employees, projects, tasks, roles, dashboards, and permissions. This makes each lesson useful for the later full-stack capstone project.

## Folder structure

```text
JS/
├── README.md
├── day-1/
├── day-2/
├── js-03-arrays-objects/
├── js-04-array-transformations/
├── js-05-promises-async-await/
├── js-06-fetch-api-calls/
├── js-07-event-loop/
├── js-08-dom-events/
└── js-09-modules-debugging/
```

The existing `day-1` and `day-2` folders hold the first two lessons. Create later folders only when their lesson begins. Keep examples small, name files clearly, and make focused commits after a completed exercise.

## Getting started

For the first lessons, use the browser developer console:

1. Open Chrome or Edge.
2. Press `F12`, then choose **Console**.
3. Type or paste a small JavaScript example.
4. Read the output and any error message.
5. Change one value and run it again.

Later lessons can be run with Node.js and a code editor.

## Current focus: JS-01 and JS-02

**JS-01** introduces JavaScript values, variables, `const`, `let`, strict equality (`===`), and block scope.

**JS-02** introduces function declarations, parameters, arguments, return values, default parameters, function expressions, arrow functions, pure functions, callbacks, and a gentle introduction to closures.

## Definition of done for an exercise

An exercise is complete when the learner can:

- Run the code without unresolved errors.
- Explain the purpose of each important variable and function.
- Demonstrate at least one normal case and one edge case.
- Use meaningful names and readable formatting.
- Commit the finished work with a descriptive message.

## Git workflow

Use a small, simple workflow:

```bash
git checkout -b lesson/js-02-functions
git add .
git commit -m "Add JS-02 function exercises"
git push -u origin lesson/js-02-functions
```

Open a pull request when a lesson includes a meaningful exercise or mini-project. Keep a pull request focused on one learning outcome.
