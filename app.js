import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, CI/CD! pipeline updated");
});

export default app;
