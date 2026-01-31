# GitHub Pages Setup Instructions

## Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `morehead-market-insights` (or your choice)
3. Set to **Public** (required for free GitHub Pages)
4. **Don't** initialize with README, .gitignore, or license
5. Click "Create repository"

## Step 2: Connect and Push to GitHub

After creating the repository, run these commands (replace `YOUR_USERNAME` with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/morehead-market-insights.git
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
`https://YOUR_USERNAME.github.io/morehead-market-insights/`

**Note:** It may take a few minutes for the site to be published. GitHub will show you the URL once it's ready.

## Future Updates

Whenever you make changes to your blog:

```bash
git add .
git commit -m "Your commit message"
git push
```

The site will automatically update within a few minutes!

## Email Subscriptions + Publish Notifications

This site includes an email subscription form powered by Buttondown, plus an automated notification sent on every publish.

1. Create a Buttondown account: https://buttondown.email
2. Create a newsletter with the slug: `morehead-market-insights`
3. In GitHub, go to your repo → **Settings** → **Secrets and variables** → **Actions**
4. Add a new repository secret:
   - Name: `BUTTONDOWN_API_KEY`
   - Value: your Buttondown API key

Once set, every push to `main` will send a notification email with the site link.
