const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const signupRoutes = require("./routes/signupRoutes");

const app = express();
const PORT = 9999;

//middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/signup", signupRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
