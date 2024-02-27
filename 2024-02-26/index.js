const express = require("express");
const fs = require("fs/promises");

const app = express();
const port = 3000;
const dataFilePath = "./data.json";

class Task {
  constructor(id, title, description, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}

// Middleware
app.use(express.json());

// Read tasks from file
async function getAllTasks() {
  try {
    const data = await fs.readFile(dataFilePath, "utf8");

    // Check if the file is empty
    if (!data.trim()) {
      return [];
    }

    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data:", error);
    return [];
  }
}

// Save tasks to file
async function saveTasks(tasks) {
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(tasks, null, 2));
  } catch (error) {
    console.error("Error saving data:", error);
  }
}

// Sample tasks
const sampleTasks = [
  new Task(1, "Sports", "Playing Cricket", false),
  new Task(2, "Study", "Learn Coding", true),
];

async function initializeDataFile() {
  try {
    const data = await fs.readFile(dataFilePath, "utf8");
    if (!data.trim()) {
      await saveTasks(sampleTasks);
    }
  } catch (error) {
    console.error("Error initializing data file:", error);
  }
}

initializeDataFile();

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).send("Error fetching tasks");
  }
});

app.get("/tasks/:id", async (req, res) => {
  try {
    const tasks = await getAllTasks();
    const task = tasks.find((t) => t.id === parseInt(req.params.id));
    if (task) {
      res.json(task);
    } else {
      res.status(404).send("Task not found");
    }
  } catch (error) {
    res.status(500).send("Error fetching task");
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      throw new Error("Missing required fields: title and description");
    }

    const tasks = await getAllTasks();
    const newId =
      tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
    const newTask = new Task(newId, title, description, false);
    tasks.push(newTask);
    await saveTasks(tasks);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.put("/tasks/:id", async (req, res) => {
  try {
    const { title, description, completed } = req.body;

    if (!title || !description || completed === undefined) {
      throw new Error(
        "Missing required fields: title, description, and completed status"
      );
    }

    const tasks = await getAllTasks();
    const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));
    if (index !== -1) {
      tasks[index] = { ...tasks[index], title, description, completed };
      await saveTasks(tasks);
      res.json(tasks[index]);
    } else {
      res.status(404).send("Task not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.patch("/tasks/:id", async (req, res) => {
  try {
    const { completed } = req.body;

    if (completed === undefined) {
      throw new Error("Missing required field: completed status");
    }

    const tasks = await getAllTasks();
    const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));
    if (index !== -1) {
      tasks[index].completed = completed;
      await saveTasks(tasks);
      res.json(tasks[index]);
    } else {
      res.status(404).send("Task not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    const tasks = await getAllTasks();
    const filteredTasks = tasks.filter((t) => t.id !== parseInt(req.params.id));
    if (filteredTasks.length !== tasks.length) {
      await saveTasks(filteredTasks);
      res.json({ message: "Task deleted successfully" });
    } else {
      res.status(404).send("Task not found");
    }
  } catch (error) {
    res.status(500).send("Error deleting task");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
