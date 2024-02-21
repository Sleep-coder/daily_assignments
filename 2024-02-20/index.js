const {
  listFiles,
  createDirectory,
  readFileContent,
  writeToFile,
} = require("./fileSystemModule");

let directoryPath = "2024-02-20";
let newDirectoryName = "2024-02-20/newDirectory";
let filePath = "2024-02-20/newDirectory/read.txt";
let newContent = "HI, My name is AARUSH";

// List files
listFiles(directoryPath)
  .then(() => {
    // Create directory
    return createDirectory(newDirectoryName);
  })
  .then(() => {
    // Read file content
    return readFileContent(filePath);
  })
  .then(() => {
    // Write to file
    return writeToFile(filePath, newContent);
  })
  .then(() => {
    console.log("File updated successfully!");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
