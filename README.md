# Bishwambhar Sen - Developer Portfolio Website

A modern, high-performance, and responsive developer portfolio website designed for **Bishwambhar Sen**, highlighting expertise in the **Salesforce Ecosystem** and **.NET Development**.

---

## 🚀 Features

* **Dual-Theme Design**: Sleek dark theme (default) and clean light theme with a toggle system that remembers preferences.
* **Razor-Sharp Certifications**: Interactive grid displaying your 8 Salesforce certifications with crisp, responsive SVG hex badges.
* **Interactive Experience Timeline**: A clean, vertical, scroll-reveal timeline tracing your career path from Dell Technologies back to Tata Consultancy Services.
* **Filterable Skills Grid**: Filterable skills categorization allowing users to instantly select specific focus areas (Salesforce, .NET, DevOps, Agile).
* **Mock Contact System**: Elegant contact form with validation, active loading indicators, and user-feedback toast notifications.
* **100% Performance-Optimized**: Crafted with vanilla HTML5, CSS3, and JavaScript—guaranteeing rapid sub-second loads and perfect SEO indexability.

---

## 📁 File Structure

```text
portfolio/
├── index.html                  # Semantic structural skeleton
├── styles.css                  # Advanced CSS (Grid, Flexbox, Animations)
├── app.js                      # Interactivity, scroll-reveal, theme toggles
├── bishwambhar_sen_resume.pdf  # Downloadable PDF resume
└── README.md                   # Setup & hosting instructions (this file)
```

---

## 💻 Local Development

1. You don't need any complex local web server, compilers, or build steps.
2. Simply double-click **`index.html`** in Finder to open it in your web browser.
3. To view or make changes, open the files in your favorite text editor (like VS Code or Cursor).

---

## 🌐 How to Publish to the Web (Free Hosting via GitHub Pages)

GitHub Pages allows you to host this static website **100% free of charge** directly from your GitHub repository. Follow these simple steps on your Mac terminal:

### Step 1: Initialize Git and Commit Locally
Open your Terminal app on your Mac, navigate to the folder, and run these commands to set up Git:

```bash
# Navigate to the portfolio folder
cd "/Users/bishwambharsen/.gemini/antigravity/scratch/portfolio"

# Initialize a new Git repository
git init

# Add all files to the staging area
git add .

# Create the initial commit
git commit -m "feat: initial commit of developer portfolio"
```

### Step 2: Create a New GitHub Repository
1. Go to your GitHub account: [https://github.com/bishwambharsen](https://github.com/bishwambharsen)
2. Click the **"New"** button to create a new repository.
3. Name your repository exactly **`portfolio`** (or another name if you prefer).
4. Keep it **Public** (required for free GitHub Pages hosting).
5. **Do NOT check** "Add a README", "Add .gitignore", or "Choose a license". Keep it empty.
6. Click **"Create repository"**.

### Step 3: Link Your Local Code to GitHub & Push
Copy the commands shown on your blank GitHub repository page under "or push an existing repository from the command line" and run them in your Terminal:

```bash
# Rename the default branch to 'main'
git branch -M main

# Link your local repository to GitHub
git remote add origin https://github.com/bishwambharsen/portfolio.git

# Push your code to GitHub
git push -u origin main
```
*(Note: If Git asks for credentials, you can authenticate using your GitHub Username and a Personal Access Token, or using SSH if you have SSH keys configured on your Mac).*

### Step 4: Enable GitHub Pages
1. Go to your new repository page on GitHub: `https://github.com/bishwambharsen/portfolio`
2. Click the **"Settings"** tab at the top of the repository page.
3. In the left sidebar under "Code and automation", click **"Pages"**.
4. Under "Build and deployment" -> "Source", make sure **"Deploy from a branch"** is selected.
5. Under "Branch", select **`main`** from the dropdown menu and ensure the folder is set to **`/ (root)`**.
6. Click the **"Save"** button.

---

### 🎉 Your Website is Live!
Within 1-2 minutes, GitHub will build and host your portfolio. It will be publicly accessible at:
👉 **`https://bishwambharsen.github.io/portfolio/`**

Whenever you update your code and push it to GitHub using `git commit` and `git push`, your live website will update automatically within seconds!
