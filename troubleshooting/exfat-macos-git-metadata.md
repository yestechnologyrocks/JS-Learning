# Troubleshooting: ExFAT Git Changes and macOS `._*` Files

This repository is stored on an ExFAT external drive. macOS can create two kinds of noise in this situation:

1. Git reports many files as modified even though their code has not changed.
2. VS Code shows files beginning with `._`, such as `._hello-world.js`.

## Fix 1: Git reports every file as modified

ExFAT does not preserve normal Unix file permissions in the same way as the Mac’s internal drive. Git may therefore see files as executable (`100755`) instead of normal files (`100644`), even when their contents are unchanged.

Check whether this is the problem:

```bash
git diff --summary
```

If the output shows only lines such as `mode change 100644 => 100755`, configure this repository to ignore file-mode changes:

```bash
git config core.filemode false
```

This setting applies only to the current repository. It does not change file contents, Git history, or the permissions used on other repositories.

## Fix 2: VS Code shows `._*` metadata files

Files that begin with `._` are macOS AppleDouble metadata sidecar files. They are not renamed source files and should not be committed.

Add the following entries to the repository’s `.gitignore` file:

```gitignore
.DS_Store
._*
```

This prevents Git from treating future metadata files as new files. It does not hide files that already exist in the VS Code Explorer.

To hide them in VS Code for this repository, create or update `.vscode/settings.json`:

```json
{
  "files.exclude": {
    "**/._*": true,
    "**/.DS_Store": true
  },
  "search.exclude": {
    "**/._*": true,
    "**/.DS_Store": true
  }
}
```

## Before committing

Run:

```bash
git status
git diff --summary
```

Do not commit `._*` files. If `git diff --summary` shows only permission changes, apply Fix 1 rather than committing the changes.
