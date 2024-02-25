const express = require("express");
const dataService = require("./fileSystem");
const {
  getAllData,
  getDataById,
  addData,
  updateData,
  deleteData,
} = require("./fileSystem");

const app = express();
const port = 3000;

app.use(express.json());

app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(err.statusCode || 500).send("Internal Server Error");
});

// Get data

app.get("/data", async (req, res) => {
  try {
    const data = await dataService.getAllData();
    res.json(data);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

// Get data by id

app.get("/data/:id", async (req, res) => {
  try {
    const data = await dataService.getDataById(req.params.id);
    if (data) {
      res.json(data);
    } else {
      res.status(404).send("Record not found"); // Add a proper error message
    }
  } catch (error) {
    res.status(500).send("Error fetching data by ID");
  }
});

// POST a new record

app.post("/data", async (req, res) => {
  try {
    const { id, first_name, last_name, email, gender } = req.body;

    // Validate required fields
    if (!id || !first_name || !last_name || !email || !gender) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Validate unique ID (if required)
    const existingData = await getAllData();
    const isDuplicateId = existingData.some((record) => record.id === id);

    if (isDuplicateId) {
      return res.status(400).json({ error: "Duplicate ID" });
    }

    const newData = { id, first_name, last_name, email, gender };
    await addData(newData);

    res.status(201).json(newData);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// PUT update a record

app.put("/data/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { first_name, last_name, email, gender } = req.body;

    // Validate required fields
    if (!first_name || !last_name || !email || !gender) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Check if the record exists
    const existingData = await getAllData();
    const existingRecord = existingData.find((record) => record.id === id);

    if (!existingRecord) {
      return res.status(404).json({ error: "Record not found" });
    }

    const updatedData = { first_name, last_name, email, gender };
    const updatedRecord = await updateData(id, updatedData);

    res.json(updatedRecord);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// DELETE a record

app.delete("/data/:id", async (req, res) => {
  try {
    const deleted = await deleteData(req.params.id);
    if (deleted) {
      res.json({ message: "Record deleted successfully" });
    } else {
      res.status(404).send("Record not found");
    }
  } catch (error) {
    res.status(500).send("Error deleting data");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
