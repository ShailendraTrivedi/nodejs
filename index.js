const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

console.log({ PORT: process.env.PORT, Message: process.env.MESSAGE });

app.get("/", (req, res) => {
  res.send(process.env.MESSAGE);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
