# GitHub Pages Setup Instructions

## Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `Blog-Website---Investing` (or your choice)
3. Set to **Public** (required for free GitHub Pages)
4. **Don't** initialize with README, .gitignore, or license
5. Click "Create repository"

## Step 2: Connect and Push to GitHub

After creating the repository, run these commands (replace `YOUR_USERNAME` with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/Blog-Website---Investing.git
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

## Step 4: Access Your Site

Your site will be available at:
`https://YOUR_USERNAME.github.io/Blog-Website---Investing/`

**Note:** It may take a few minutes for the site to be published. GitHub will show you the URL once it's ready.

## Future Updates

Whenever you make changes to your blog:

```bash
git add .
git commit -m "Your commit message"
git push
```

The site will automatically update within a few minutes!

