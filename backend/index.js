import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`Our Soccer application is running on port: ${PORT}`);
});
