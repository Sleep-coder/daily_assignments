const {
  listFiles,
  createDirectory,
  readFileContent,
  writeToFile,
} = require("./fileSystemModule");

const directoryPath = "2024-02-20";
const newDirectoryName = "2024-02-20/newDirectory";
const filePath = "2024-02-20/newDirectory/read.txt";
const newContent = "HI,My name is AARUSH";

// List files
listFiles(directoryPath);

// Create directory
createDirectory(newDirectoryName);

// Read file content
readFileContent(filePath);

// Write to file
writeToFile(filePath, newContent);
