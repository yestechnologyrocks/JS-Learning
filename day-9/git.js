// > cd git-practice
// > git init -b main
// Initialized empty Git repository in /path/to/git-practice/.git/

// > printf '%s\n' 'console.log("Hello, Git!");' > app.js
// This will create a new file named app.js with the content console.log("Hello, Git!");

// > git status
// The output will show that app.js is an untracked file:

// > git add app.js
// The git add command stages the app.js file for commit.
// After running this command, if you run git status again,
// you will see that app.js is now in the "Changes to be committed" section.

// > git diff --staged
// > git commit -m "Add JavaScript greeting"
// > git log --oneline -1
