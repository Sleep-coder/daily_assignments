const {
  listFiles,
  createDirectory,
  readFileContent,
  writeToFile,
} = require("./fileSystemModule");

let directoryPath = "./";
let newDirectoryName = "newDirectory";
let filePath = "newDirectory/read.txt";
let newContent = "HI, My name is AARUSH";

// List files
listFiles(directoryPath)
  .then(async () => {
    // Create directory
    return await createDirectory(newDirectoryName);
  })
  .then(async () => {
    // Read file content
    return await writeToFile(filePath, newContent);
  })
  .then(async () => {
    // Write to file
    return await readFileContent(filePath);
  })
  .then(() => {
    console.log("File updated successfully!");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
