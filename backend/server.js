const express = require("express");
//create a web server
const app = express();

const PORT = 8000;
//127.0.0.1
app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
