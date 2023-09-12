const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
//create a web server
const app = express();
//connect database
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = 8000;
//127.0.0.1
app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
