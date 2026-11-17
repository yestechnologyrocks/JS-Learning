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
// This command shows the differences between the staged changes and the last commit.
// Since this is the first commit, it will show the entire content of app.js as a new addition.

// > git commit -m "Add JavaScript greeting"
// This command creates a new commit with the staged changes and the message "Add JavaScript greeting".

// > git log --oneline -1
// This command shows the most recent commit in a concise format. The output will look something like this:
