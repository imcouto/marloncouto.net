const fs = require('fs');
const path = require('path');

function usage() {
  console.log(
    'Usage: node script.js [--exclude folder_name] [--types] <folder1> <folder2> ...',
  );
  process.exit(1);
}

function generateIndexFile(rootFolder, excludeFolder) {
  const rootPath = path.resolve(rootFolder);
  const indexFile = path.join(rootPath, 'index.ts');

  if (!fs.existsSync(rootPath) || !fs.statSync(rootPath).isDirectory()) {
    console.error(`Error: Folder ${rootFolder} does not exist.`);
    return;
  }

  const files = [];
  function searchFiles(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (
        entry.isDirectory() &&
        (!excludeFolder || !fullPath.includes(excludeFolder))
      ) {
        searchFiles(fullPath);
      } else if (
        entry.isFile() &&
        ['.ts', '.tsx', '.astro'].some((ext) => entry.name.endsWith(ext)) &&
        entry.name !== 'index.ts'
      ) {
        files.push(fullPath);
      }
    });
  }

  searchFiles(rootPath);

  const lines = files.map((file) => {
    const relativePath = `./${path.relative(rootPath, file).replace(/\\/g, '/')}`;
    const exportName = path.basename(file, path.extname(file));
    if (file.endsWith('.astro')) {
      return `export { default as ${exportName} } from '${relativePath}';`;
    } else if (rootFolder.includes('types')) {
      return `export type { ${exportName} } from '${relativePath}';`;
    } else {
      return `export { ${exportName} } from '${relativePath}';`;
    }
  });

  fs.writeFileSync(indexFile, lines.join('\n'), 'utf-8');
  console.log(`index.ts updated successfully in ${rootFolder}!`);
}

function main() {
  const args = process.argv.slice(2);
  if (args.length < 1) usage();

  let excludeFolder = null;
  const folders = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--exclude') {
      if (i + 1 >= args.length) {
        console.error('Error: Missing folder name for --exclude.');
        usage();
      }
      excludeFolder = args[++i];
    } else {
      folders.push(args[i]);
    }
  }

  if (folders.length === 0) usage();

  folders.forEach((folder) => generateIndexFile(folder, excludeFolder));
}

if (require.main === module) {
  main();
}
