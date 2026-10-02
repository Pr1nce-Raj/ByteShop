# Contributing to ByteShop 🚀

Thank you for your interest in contributing to **ByteShop**! Whether you are a first-time Git user or looking for open source practice, this project is built to guide you through the complete contribution process.

---

## 🧭 The 8-Step Contribution Workflow

Follow these steps to make your contribution smoothly:

### 1. Find or Claim an Issue
- Browse the [Issues tab](../../issues) on GitHub.
- Look for issues with the `good first issue` or `hacktoberfest` labels.
- Comment on the issue you want to solve: *"Hi! I'd like to work on this issue."* Wait for a maintainer to assign it to you so two people don't work on the same task.

---

### 2. Fork the Repository
- Click the **Fork** button in the top-right corner of the GitHub repository page.
- This creates a copy of the repository in your personal GitHub account (`https://github.com/<your-username>/ByteShop`).

---

### 3. Clone Your Fork Locally
Open your terminal (PowerShell, Command Prompt, or Bash) and run:
```bash
git clone https://github.com/<your-username>/ByteShop.git
cd ByteShop
```

---

### 4. Install Dependencies & Start the App
Make sure you have [Node.js](https://nodejs.org/) installed, then run:
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser. You should see the ByteShop storefront running live!

---

### 5. Create a New Branch
**Never make changes directly on the `main` branch.** Always create a feature branch for your work:
```bash
# Branch naming format: fix/<issue-number>-<short-description>
git checkout -b fix/1-banner-typo
```

---

### 6. Make and Test Your Fix
- Open the project in your code editor (like VS Code).
- Locate the file mentioned in the issue (for example, `src/components/Banner.jsx`).
- Make the necessary change and save the file.
- Verify the change in your browser at `http://localhost:5173` to ensure the bug is resolved and no other part of the app broke.

---

### 7. Commit and Push Your Changes
Stage and commit your changes with a clear message:
```bash
# Check modified files
git status

# Stage the file
git add .

# Commit with a descriptive message referencing the issue number
git commit -m "fix(banner): correct typo in header (#1)"

# Push your branch to your GitHub fork
git push origin fix/1-banner-typo
```

---

### 8. Open a Pull Request (PR)
1. Go to your fork on GitHub (`https://github.com/<your-username>/ByteShop`).
2. You will see a green button: **"Compare & pull request"**. Click it.
3. Fill out the PR template:
   - Provide a brief summary of what you fixed.
   - Mention the issue number: `Fixes #1`.
4. Click **Create pull request**.

🎉 Congratulations! A maintainer will review your code, provide constructive feedback, and merge it into the main project.

---

## 💡 Important Rules & Best Practices

1. **One Issue Per PR**: Please only fix one issue per pull request. This keeps reviews quick and avoids merge conflicts.
2. **Be Kind & Respectful**: We are all here to learn. If you get stuck, ask questions in the issue discussion—the community is here to help!
3. **Keep Branches Updated**: Before starting, make sure your fork is in sync with the main repository.
