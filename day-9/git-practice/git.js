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

// Homework
// Create a github account : https://github.com/
// Follow the steps what github will show you.
// Request for Developer access to the repo: https://github.com/yestechnologyrocks/JS-Learning
// After you get the access for this repo, you can clone the repo to your local machine using the following command:
// Commad for clonning the git repo: > git clone https://github.com/yestechnologyrocks/JS-Learning.git
// Create a new branch for your work using the following command: > git branch <branch-name>
// Switch to the new branch using the following command: > git checkout <branch-name>
// Make your changes to the code in the repo and commit them using the following commands:
// > git add <file-name>
// > git commit -m "Your commit message"
// Push your changes to the remote repository using the following command:
// > git push origin <branch-name>
// Create a pull request on GitHub to merge your changes into the main branch of the repo.
// Add the reviewers(yestechnologyrocks) to your pull request and wait for their feedback.
