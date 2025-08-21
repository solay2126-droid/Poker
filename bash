rm -rf node_modules package-lock.json
npm cache clean --force
npm install
git add package.json package-lock.json
git commit -m "Fix wallet-adapter version for Netlify"
git push
