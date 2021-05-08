const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../notes.html"));
});

// app.get("/api/notes", (req, res) => {});

// app.post("/api/notes", (req, res) => {});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
