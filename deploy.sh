
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
echo 'seattlesalarynegotiation.com' > CNAME

# create a .nojekyll file to bypass GitHub Pages processing
touch .nojekyll

# Adding README with deployment instructions
echo "# Salary Negotiation Consultancy Landing Page

This is a static landing page for a salary negotiation consultancy. Built with React, TypeScript, and Tailwind CSS.

## Deployment

This site is configured to be deployed to GitHub Pages.

1. Fork this repository
2. Update your repository settings to enable GitHub Pages from the 'dist' folder on the 'master' branch
3. Run \`npm install\` and then \`npm run deploy\` to build and push to GitHub Pages
" > README.md

echo "Site built and ready for GitHub Pages deployment!"

# Uncomment the following lines to automatically commit and push to the gh-pages branch
# git init
# git add -A
# git commit -m 'deploy'
# git push -f git@github.com:username/repository-name.git master:gh-pages

cd -
