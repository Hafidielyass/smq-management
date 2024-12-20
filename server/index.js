const PORT = 5000;
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { connectDB } = require("./config/db");

app.use(express.json());

// if you using the front end use this :
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

connectDB();
