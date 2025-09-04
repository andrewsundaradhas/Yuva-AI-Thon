# Stop any running Node.js processes
get-process | Where-Object {$_.Name -eq "node"} | Stop-Process -Force

# Remove node_modules and .next folders
Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "node_modules" -Recurse -Force -ErrorAction SilentlyContinue

# Clear npm cache
npm cache clean --force

# Install dependencies
npm install

# Build the project
npm run build
