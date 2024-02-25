const fs = require("fs/promises");

async function getAllData() {
  try {
    const data = await fs.readFile("data.json", "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data:", error);
    throw error;
  }
}

async function getDataById(id) {
  const data = await getAllData();
  return data.find((record) => record.id === parseInt(id));
}

async function addData(data) {
  try {
    const existingData = await getAllData();
    existingData.push(data);
    await fs.writeFile("data.json", JSON.stringify(existingData));
    return data;
  } catch (error) {
    console.error("Error adding data:", error);
    throw error;
  }
}

async function updateData(id, updatedData) {
  try {
    const existingData = await getAllData();
    const index = existingData.findIndex(
      (record) => record.id === parseInt(id)
    );
    if (index !== -1) {
      existingData[index] = { ...existingData[index], ...updatedData };
      await fs.writeFile("data.json", JSON.stringify(existingData));
      return existingData[index];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
}

async function deleteData(id) {
  try {
    const existingData = await getAllData();
    const updatedData = existingData.filter(
      (record) => record.id !== parseInt(id)
    );
    if (updatedData.length !== existingData.length) {
      await fs.writeFile("data.json", JSON.stringify(updatedData));
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
}

module.exports = {
  getAllData,
  getDataById,
  addData,
  updateData,
  deleteData,
};
