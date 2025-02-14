const fs = require('fs');
const path = require('path');

// Function to count file types in a directory
function countFileTypes(directory) {
  const counter = {};
  function walk(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else {
        const extension = path.extname(entry.name);
        counter[extension] = (counter[extension] || 0) + 1;
      }
    });
  }
  walk(directory);
  return counter;
}

function main() {
  // Get the directory path from the command line arguments
  if (process.argv.length !== 3) {
    console.log('Usage: node countFiles.js <directory_path>');
    process.exit(1);
  }

  const directory = process.argv[2];
  const results = countFileTypes(directory);

  // Print the results
  for (const [extension, quantity] of Object.entries(results)) {
    console.log(`${extension}: ${quantity}`);
  }
}

if (require.main === module) {
  main();
}
