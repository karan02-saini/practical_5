# Practical 5: Simple Node.js Git Project

This project demonstrates how **Git and GitHub work with Node.js** — including creating branches, committing changes, and performing push & pull operations.  
It is designed to help beginners understand branching, merging, and workflow management in Git.

---

## 📝 Description

- The **main** branch contains the HTML structure of the project.
- The **design** branch contains the CSS and JavaScript files for styling and interactivity.
- Merging both branches creates a fully styled and interactive project.
- Features include:
  - Interactive greeting based on time of day
  - Color-changing background button
  - Info and Like buttons with alerts

---

## 📂 File Structure

practical_5/ │ ├── index.html      # HTML file in main branch ├── style.css       # CSS file in design branch ├── script.js       # JS file in design branch └── README.md       # Project documentation

---

## 🌿 Branch Workflow

1. **main branch**
   - Contains HTML files
   - Used as the base branch for merging design changes

2. **design branch**
   - Contains CSS and JS
   - After styling and scripting, merged into main for full project

3. **Git Commands Example**
```bash
# Create main branch
git checkout -b main

# Add HTML
git add index.html
git commit -m "Add HTML file"

# Create design branch
git checkout -b design

# Add CSS & JS
git add style.css script.js
git commit -m "Add CSS and JS files"

# Merge design into main
git checkout main
git merge design

# Push changes to remote
git push origin main


---

📷 Screenshot / Output



> ![Preview](output.png)




---





---
