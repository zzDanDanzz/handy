/**
Combines file content. 
*/

const fs = require('fs');
const path = require('path');

// Check if at least one argument is provided
if (process.argv.length < 3) {
  console.error('Usage: node script.js <file/directory> [file/directory] [...]');
  process.exit(1);
}

// Function to recursively get all files in a directory
function getFilesRecursively(dir) {
  let files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const itemPath = path.join(dir, item);
    if (fs.statSync(itemPath).isDirectory()) {
      files = files.concat(getFilesRecursively(itemPath));
    } else {
      files.push(itemPath);
    }
  }

  return files;
}

// Combine the contents of all files into one text
let combinedContent = '';
for (let i = 2; i < process.argv.length; i++) {
  const filePath = process.argv[i];
  const files = fs.statSync(filePath).isDirectory() ? getFilesRecursively(filePath) : [filePath];

  for (const file of files) {
    const fileContent = fs.readFileSync(file, 'utf8');
    combinedContent += `\n\n/* START OF FILE: ${file} */\n\n${fileContent}\n`;
  }
}

// Write the combined content to a new file
fs.writeFileSync('combined_output.txt', combinedContent);
console.log('Combined output written to combined_output.txt');
