const fs = require('fs');

// Values come from GitHub runner env (you set them in GitHub Settings) 
const siteName = process.env.SITE_NAME || "Demo4 Local"; 
const buildNumber = process.env.BUILD_NUMBER || "0"; 
const commitSha = (process.env.COMMIT_SHA || "local").substring(0,7); 
const envName = process.env.ENV_NAME || "development"; 
const apiUrl = process.env.API_URL || "http://localhost:3000";

// SAFE: we only check if secret exists, we NEVER put its real value in HTML 
const hasSecret = !!process.env.MY_SECRET_MESSAGE; 
const secretStatus = hasSecret
  ? "Secret is set in GitHub Settings (value hidden)"
  : "No secret set";

let html = fs.readFileSync('index.html', 'utf8');

html = html.replaceAll('{{SITE_NAME}}', siteName)
           .replaceAll('{{BUILD_NUMBER}}', buildNumber)
           .replaceAll('{{COMMIT_SHA}}', commitSha)
           .replaceAll('{{ENV_NAME}}', envName)
           .replaceAll('{{API_URL}}', apiUrl)
           .replaceAll('{{SECRET_STATUS}}', secretStatus);

fs.mkdirSync('dist', { recursive: true }); 
fs.writeFileSync('dist/index.html', html); 
fs.copyFileSync('app.js', 'dist/app.js');

console.log(` Built: ${siteName} | Build #${buildNumber} | Secret exists: ${hasSecret}`);