import chalk from 'chalk' // Add chalk for coloring console messages
import chokidar from 'chokidar'
import fs from 'fs'
import path from 'path'

const folderPaths = [
  path.resolve(__dirname, './components/pasta1'),
  path.resolve(__dirname, './components/pasta2'),
  // Add more folders as needed
]
console.log('Folder paths:', folderPaths)

// Function that generates the index.ts file
const generateIndexFile = (folderPath) => {
  try {
    const files = fs.readdirSync(folderPath).filter((file) => {
      return file.endsWith('.ts') && file !== 'index.ts'
    })

    const exports = files
      .map((file) => {
        const name = path.basename(file, '.ts')
        return `export { default as ${name} } from './${name}';`
      })
      .join('\n')

    const outputPath = path.join(folderPath, 'index.ts')
    fs.writeFileSync(outputPath, exports, 'utf8')
    console.log(chalk.green(`index.ts updated successfully in ${folderPath}!`))
  } catch (error) {
    console.error(
      chalk.red(`Error generating index.ts in ${folderPath}:`),
      error,
    )
  }
}

// Configure the watcher to monitor changes
const startWatcher = () => {
  try {
    const watcher = chokidar.watch(folderPaths, {
      ignored: /index\.ts$/, // Ignore the index.ts itself
      persistent: true,
    })

    console.log(chalk.blue('Monitoring changes in folders:'), folderPaths)

    watcher
      .on('add', (filePath) => {
        console.log(chalk.green(`File added: ${path.basename(filePath)}`))
        generateIndexFile(path.dirname(filePath))
      })
      .on('unlink', (filePath) => {
        console.log(chalk.red(`File removed: ${path.basename(filePath)}`))
        generateIndexFile(path.dirname(filePath))
      })
      .on('change', (filePath) => {
        console.log(chalk.yellow(`File changed: ${path.basename(filePath)}`))
        generateIndexFile(path.dirname(filePath))
      })
      .on('error', (error) => {
        console.error(chalk.red('Watcher error:'), error)
      })
  } catch (error) {
    console.error(chalk.red('Error starting watcher:'), error)
  }
}

// Run the script once and start the watcher
try {
  folderPaths.forEach(generateIndexFile) // Generate the file on start for each folder
  startWatcher() // Start the watcher
} catch (error) {
  console.error(chalk.red('Error initializing script:'), error)
}
