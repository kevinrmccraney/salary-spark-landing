
# Salary Negotiation Consultancy Landing Page

A modern, responsive landing page for a salary negotiation consultancy business.

## Features

- Modern, responsive design
- Single-page application with smooth scrolling
- Optimized for GitHub Pages deployment
- No database dependencies - pure static HTML/CSS/JS

## Deployment to GitHub Pages

This site is configured to be easily deployed to GitHub Pages:

1. Fork or clone this repository
2. Add the following to your package.json scripts section:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```
4. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Technology Stack

- React
- TypeScript
- Tailwind CSS
- Vite
